// Teacher Dashboard: the logged-in teacher's profile and class for the current school year.
// Backend: GET /api/teachers/me (read) and PUT /api/teachers/me (teacher edits own profile).
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiFetch } from '../api';
import { useAuth } from '../auth/AuthContext';
import { academicYearFor, academicYearOptions } from '../utils/academicYear';

const EMPTY_FORM = { school_name: '', class_subject: '', teaching_grade: '', class_name: '' };

const TeacherDashboard = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState(academicYearFor());
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saveError, setSaveError] = useState('');
  const [saving, setSaving] = useState(false);

  // Load the class for the selected school year (again whenever the year changes)
  useEffect(() => {
    setLoading(true);
    apiFetch(`/api/teachers/me?academicYear=${year}`)
      .then((res) => {
        setError('');
        setData(res.payload);
        setForm(pickForm(res.payload.teacher, res.payload.classroom));
      })
      .catch((err) => setError(err.message || 'Could not load your class.'))
      .finally(() => setLoading(false));
  }, [year]);

  const pickForm = (t = {}, classroom) => ({
    school_name: t.school_name || '',
    class_subject: t.class_subject || '',
    teaching_grade: t.teaching_grade || '',
    class_name: classroom?.class_name || '',
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const save = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSaveError('');
    try {
      const res = await apiFetch('/api/teachers/me', {
        method: 'PUT',
        body: JSON.stringify({ ...form, academic_year: year }),
      });
      // Reload so the class name and the student list reflect the save
      const fresh = await apiFetch(`/api/teachers/me?academicYear=${year}`);
      setData(fresh.payload);
      setForm(pickForm(fresh.payload.teacher, fresh.payload.classroom));
      setEditing(false);
    } catch (err) {
      setSaveError(err.message || 'Could not save your profile');
    } finally {
      setSaving(false);
    }
  };

  const removeStudent = async (student) => {
    if (!window.confirm(`Delete ${student.student_name}?`)) return;
    try {
      await apiFetch(`/api/students/${student.student_id}`, { method: 'DELETE' });
      // Reload the list so the deleted student is gone
      const fresh = await apiFetch(`/api/teachers/me?academicYear=${year}`);
      setData(fresh.payload);
    } catch (err) {
      setError(err.message || 'Could not delete the student');
    }
  };

  const students = data?.students ?? [];
  const teacher = data?.teacher;

  // The table always renders so something is visible while loading, on error, or when empty
  let body;
  if (loading) {
    body = <tr><td colSpan={3} className='p-4 text-center'>Loading your class…</td></tr>;
  } else if (error) {
    body = <tr><td colSpan={3} className='p-4 text-center text-red-600' role='alert'>{error}</td></tr>;
  } else if (students.length === 0) {
    body = (
      <tr>
        <td colSpan={3} className='p-4 text-center'>
          No students are in your class for {data?.academicYear} yet. Add one from{' '}
          <Link to={`/students/new?teacherId=${teacher?.teacher_id}&grade=${encodeURIComponent(teacher?.teaching_grade || '')}&year=${year}`} className='underline'>New student</Link>.
        </td>
      </tr>
    );
  } else {
    body = students.map((s) => (
      <tr key={s.student_id} className='border-t'>
        <td className='p-3'>{s.student_name}</td>
        <td className='p-3'>{s.class_name || '—'}</td>
        <td className='p-3 space-x-4 whitespace-nowrap'>
          <Link to={`/students/${s.student_id}?year=${year}`} className='underline text-teal-700'>View</Link>
          <Link to={`/students/${s.student_id}/edit`} className='underline text-teal-700'>Edit</Link>
          <button onClick={() => removeStudent(s)} className='underline text-red-600'>Delete</button>
        </td>
      </tr>
    ));
  }

  const input = 'border py-2 px-3 text-grey-darkest w-full';

  return (
    <main className='max-w-4xl mx-auto px-4 py-10'>
      <h1 className='text-3xl font-bold mb-2'>Hi {user?.user_name}</h1>

      <section className='bg-white rounded shadow p-6 mb-8 text-grey-darkest'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>My profile</h2>
          {teacher && !editing && (
            <button
              onClick={() => setEditing(true)}
              className='underline text-teal-700'
            >
              Edit profile
            </button>
          )}
        </div>

        {editing ? (
          <form onSubmit={save} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <label className='flex flex-col'>
              School
              <input className={input} name='school_name' value={form.school_name} onChange={onChange} />
            </label>
            <label className='flex flex-col'>
              Subject
              <input className={input} name='class_subject' value={form.class_subject} onChange={onChange} />
            </label>
            <label className='flex flex-col'>
              Grade
              <input className={input} name='teaching_grade' value={form.teaching_grade} onChange={onChange} />
            </label>
            <label className='flex flex-col'>
              Class name
              <input
                className={input}
                name='class_name'
                value={form.class_name}
                onChange={onChange}
                placeholder='e.g. Grade 3 Room 2'
              />
            </label>
            <label className='flex flex-col'>
              Teacher email (same as your login)
              <input className={input} type='email' value={user?.user_email || ''} readOnly />
            </label>
            {saveError && <p role='alert' className='text-red-600 md:col-span-2'>{saveError}</p>}
            <div className='md:col-span-2 flex gap-4'>
              <button
                type='submit'
                disabled={saving}
                className='bg-teal-600 text-white px-4 py-2 rounded disabled:opacity-50'
              >
                {saving ? 'Saving…' : 'Save'}
              </button>
              <button
                type='button'
                onClick={() => {
                  setEditing(false);
                  setSaveError('');
                  setForm(pickForm(teacher, data?.classroom));
                }}
                className='underline'
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <dl className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3'>
            <div><dt className='font-bold'>Login name</dt><dd>{user?.user_name || '—'}</dd></div>
            <div><dt className='font-bold'>Login email</dt><dd>{user?.user_email || '—'}</dd></div>
            <div><dt className='font-bold'>Teacher ID</dt><dd>{teacher?.teacher_id || '—'}</dd></div>
            <div><dt className='font-bold'>Teacher name</dt><dd>{teacher?.teacher_name || '—'}</dd></div>
            <div><dt className='font-bold'>Teacher email</dt><dd>{teacher?.teacher_email || 'Not set'}</dd></div>
            <div><dt className='font-bold'>School</dt><dd>{teacher?.school_name || 'Not set'}</dd></div>
            <div><dt className='font-bold'>Subject</dt><dd>{teacher?.class_subject || 'Not set'}</dd></div>
            <div><dt className='font-bold'>Class name</dt><dd>{data?.classroom?.class_name || 'Not set'}</dd></div>
            <div><dt className='font-bold'>Grade</dt><dd>{teacher?.teaching_grade || 'Not set'}</dd></div>
            <div><dt className='font-bold'>School year</dt><dd>{data?.academicYear || '—'}</dd></div>
          </dl>
        )}
      </section>

      <section className='bg-white rounded shadow p-6 text-grey-darkest'>
        <div className='flex justify-between items-center mb-4 gap-4'>
          <div className='flex items-center gap-3'>
            <h2 className='text-xl font-bold'>My students</h2>
            <select
              className='border py-1 px-2'
              value={year}
              onChange={(e) => setYear(e.target.value)}
              aria-label='School year'
            >
              {academicYearOptions().map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <Link to={`/students/new?teacherId=${teacher?.teacher_id}&grade=${encodeURIComponent(teacher?.teaching_grade || '')}&year=${year}`} className='bg-indigo-500 px-4 py-2 rounded text-white hover:bg-teal-400'>
            Add student
          </Link>
        </div>
        <table className='w-full text-left border'>
          <thead>
            <tr className='bg-teal-500 text-white'>
              <th className='p-3'>Student</th>
              <th className='p-3'>Class</th>
              <th className='p-3'></th>
            </tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </section>
    </main>
  );
};

export default TeacherDashboard;
