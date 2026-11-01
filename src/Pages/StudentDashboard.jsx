// Student Dashboard: the logged-in student's own reading.
// Backend: GET /api/students/me (uses the id from the login token).
import { useEffect, useState } from 'react';
import { apiFetch } from '../api';
import Modal from '../Components/features/Modal';
import { useAuth } from '../auth/AuthContext';
import { academicYearFor } from '../utils/academicYear';

const EMPTY_LOG = { book_title: '', reading_minutes: '', pages_read: '', reading_inference: '' };

const StudentDashboard = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [log, setLog] = useState(EMPTY_LOG);
  const [saveError, setSaveError] = useState('');
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [teacherForYear, setTeacherForYear] = useState(null);
  const [chosenYear, setChosenYear] = useState(academicYearFor());
  // Only school years the student is enrolled in; use the chosen year if enrolled then, else the latest one
  const enrolledYears = data?.enrolledYears || [];
  const year = enrolledYears.includes(chosenYear) ? chosenYear : enrolledYears[0] || chosenYear;
  // Only the years the student is enrolled in (the current year if they have none yet)
  const yearOptions = enrolledYears.length ? enrolledYears : [academicYearFor()];
  // Only the logs whose date falls in the selected school year (August to July)
  const logsForYear = data ? data.logs.filter((log) => academicYearFor(new Date(log.date_read)) === year) : [];

  const loadMine = () =>
    apiFetch('/api/students/me')
      .then((res) => setData(res))
      .catch((err) => setError(err.message || 'Could not load your reading.'));

  useEffect(() => {
    loadMine().finally(() => setLoading(false));
  }, []); // load once

  // The teacher and class for this school year
  const studentId = data?.student?.student_id;
  useEffect(() => {
    if (!studentId) return;
    apiFetch(`/api/students/${studentId}/class?academicYear=${year}`)
      .then((res) => setTeacherForYear(res.payload.teacher))
      .catch(() => setTeacherForYear(null));
  }, [studentId, year]);

  // Edit a mistake in one of your own logs (students cannot delete logs)
  const [editingId, setEditingId] = useState(null);
  const [editDraft, setEditDraft] = useState(null);
  const [editError, setEditError] = useState('');
  // When each log was edited in this visit (shown on the row; not saved)
  const [editedAt, setEditedAt] = useState({});

  const startEdit = (log) => {
    setEditingId(log.log_id);
    setEditError('');
    setEditDraft({
      book_title: log.book_title || '',
      reading_minutes: log.reading_minutes ?? '',
      pages_read: log.pages_read ?? '',
      reading_inference: log.reading_inference || '',
    });
  };

  const saveEdit = async (log) => {
    setEditError('');
    try {
      await apiFetch(`/api/logs/${log.log_id}`, {
        method: 'PUT',
        body: JSON.stringify({
          book_title: editDraft.book_title.trim(),
          reading_minutes: Number(editDraft.reading_minutes) || 0,
          pages_read: Number(editDraft.pages_read) || 0,
          reading_inference: editDraft.reading_inference.trim(),
          books_id: log.books_id ?? null,
        }),
      });
      setEditedAt((prev) => ({ ...prev, [log.log_id]: new Date() }));
      setEditingId(null);
      await loadMine();
    } catch (err) {
      setEditError(err.message || 'Could not save the change');
    }
  };

  const onLogChange = (e) => setLog({ ...log, [e.target.name]: e.target.value });

  const saveLog = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSaveError('');
    setSaved(false);
    try {
      await apiFetch('/api/logs/new', {
        method: 'POST',
        body: JSON.stringify({
          book_title: log.book_title.trim(),
          reading_minutes: Number(log.reading_minutes) || 0,
          pages_read: Number(log.pages_read) || 0,
          reading_inference: log.reading_inference.trim(),
        }),
      });
      setLog(EMPTY_LOG);
      setSaved(true);
      await loadMine();
    } catch (err) {
      setSaveError(err.message || 'Could not save your reading log');
    } finally {
      setSaving(false);
    }
  };

  const input = 'border py-2 px-3 text-grey-darkest w-full';

  return (
    <main className='max-w-4xl mx-auto px-4 py-10'>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-3xl font-bold'>Hi {user?.user_name}</h1>
        <button
          type='button'
          onClick={() => setShowModal(true)}
          className='bg-indigo-500 text-white px-4 py-2 rounded hover:bg-teal-400'
        >
          Add log
        </button>
      </div>

      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} choice={2} />}

      {/* Log my reading (inline form) hidden for now; use the Add log popup
      <section id='log' className='bg-white rounded shadow p-6 mb-8 text-grey-darkest'>
        <h2 className='text-xl font-bold mb-4'>Log my reading</h2>
        <form onSubmit={saveLog} className='grid grid-cols-1 md:grid-cols-3 gap-4 items-end'>
          <label className='flex flex-col'>
            Book title
            <input className={input} name='book_title' value={log.book_title} onChange={onLogChange} required />
          </label>
          <label className='flex flex-col'>
            Minutes read
            <input className={input} type='number' min='0' name='reading_minutes' value={log.reading_minutes} onChange={onLogChange} required />
          </label>
          <label className='flex flex-col'>
            Pages read
            <input className={input} type='number' min='0' name='pages_read' value={log.pages_read} onChange={onLogChange} />
          </label>
          <label className='flex flex-col md:col-span-3'>
            What I understood from this book (my inference)
            <textarea className={input} name='reading_inference' rows='3' value={log.reading_inference} onChange={onLogChange} />
          </label>
          <div className='md:col-span-3 flex gap-4 items-center'>
            <button
              type='submit'
              disabled={saving}
              className='bg-indigo-500 text-white px-4 py-2 rounded hover:bg-teal-400 disabled:opacity-50'
            >
              {saving ? 'Saving…' : 'Save log'}
            </button>
            {saved && <span className='text-teal-700'>Saved!</span>}
            {saveError && <span role='alert' className='text-red-600'>{saveError}</span>}
          </div>
        </form>
      </section>
      */}

      {loading && <p className='text-center'>Loading your reading…</p>}
      {error && <p role='alert' className='text-red-600'>{error}</p>}

      {data && (
        <>
          <p className='mb-6'>
            {data.totals.logs} logs · {data.totals.minutes} minutes · {data.totals.pages} pages
          </p>

          <section className='bg-white rounded shadow p-6 mb-8'>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-xl font-bold'>My details</h2>
              <select className='border py-1 px-2 text-sm text-grey-darkest' aria-label='School year' value={year} onChange={(e) => setChosenYear(e.target.value)}>
                {yearOptions.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
            <dl className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <div><dt className='font-bold'>Student ID</dt><dd>{data.student.student_id}</dd></div>
              <div><dt className='font-bold'>Email (login)</dt><dd>{user?.user_email || data.student.student_email || 'Not set'}</dd></div>
              {teacherForYear && (
                <>
                  <div><dt className='font-bold'>Class ({year})</dt><dd>{teacherForYear.class_name}</dd></div>
                  <div><dt className='font-bold'>Teacher name ({year})</dt><dd>{teacherForYear.teacher_name}</dd></div>
                </>
              )}
            </dl>
          </section>

          <section className='bg-white rounded shadow p-6 mb-8'>
            <h2 className='text-xl font-bold mb-4'>Books I've read</h2>
            {data.books.length === 0 ? (
              <p>No books logged yet.</p>
            ) : (
              <ul className='list-disc pl-6'>
                {data.books.map((title) => (
                  <li key={title}>{title}</li>
                ))}
              </ul>
            )}
          </section>

          <section className='bg-white rounded shadow p-6'>
            <h2 className='text-xl font-bold mb-4'>My reading logs</h2>
            {logsForYear.length === 0 ? (
              <p>No reading logs yet.</p>
            ) : (
              <table className='w-full text-left'>
                <thead>
                  <tr className='bg-teal-500 text-white'>
                    <th className='p-2'>Date</th>
                    <th className='p-2'>Book</th>
                    <th className='p-2'>Minutes</th>
                    <th className='p-2'>Pages</th>
                    <th className='p-2'>Reading inference</th>
                    <th className='p-2'>Edit</th>
                    <th className='p-2'>Teacher comment</th>
                  </tr>
                </thead>
                <tbody>
                  {logsForYear.map((log) =>
                    editingId === log.log_id ? (
                      <tr key={log.log_id} className='border-b'>
                        <td className='p-2'>{new Date(log.date_read).toLocaleString()}</td>
                        <td className='p-2'>
                          <input className={input} value={editDraft.book_title} onChange={(e) => setEditDraft({ ...editDraft, book_title: e.target.value })} />
                        </td>
                        <td className='p-2'>
                          <input className={input} type='number' min='0' value={editDraft.reading_minutes} onChange={(e) => setEditDraft({ ...editDraft, reading_minutes: e.target.value })} />
                        </td>
                        <td className='p-2'>
                          <input className={input} type='number' min='0' value={editDraft.pages_read} onChange={(e) => setEditDraft({ ...editDraft, pages_read: e.target.value })} />
                        </td>
                        <td className='p-2'>
                          <textarea className={input} rows='2' value={editDraft.reading_inference} onChange={(e) => setEditDraft({ ...editDraft, reading_inference: e.target.value })} />
                        </td>
                        <td className='p-2'>
                          <button type='button' onClick={() => saveEdit(log)} className='underline text-teal-700 mr-3'>Save</button>
                          <button type='button' onClick={() => setEditingId(null)} className='underline'>Cancel</button>
                          {editError && <p role='alert' className='text-red-600 text-sm'>{editError}</p>}
                        </td>
                        <td className='p-2'>{log.teacher_comments}</td>
                      </tr>
                    ) : (
                      <tr key={log.log_id} className='border-b'>
                        <td className='p-2'>
                          {new Date(log.date_read).toLocaleString()}
                          {editedAt[log.log_id] && (
                            <div className='text-xs text-grey-darker'>Edited {editedAt[log.log_id].toLocaleString()}</div>
                          )}
                        </td>
                        <td className='p-2'>{log.book_title}</td>
                        <td className='p-2'>{log.reading_minutes}</td>
                        <td className='p-2'>{log.pages_read}</td>
                        <td className='p-2'>{log.reading_inference}</td>
                        <td className='p-2'>
                          <button type='button' onClick={() => startEdit(log)} className='underline text-teal-700'>Edit</button>
                        </td>
                        <td className='p-2'>{log.teacher_comments}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            )}
          </section>
        </>
      )}
    </main>
  );
};

export default StudentDashboard;
