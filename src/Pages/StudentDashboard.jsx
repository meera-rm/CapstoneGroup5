// Student Dashboard: the logged-in student's own reading.
// Backend: GET /api/students/me (uses the id from the login token).
import { useEffect, useState } from 'react';
import { apiFetch } from '../api';
import { useAuth } from '../auth/AuthContext';

const EMPTY_LOG = { book_title: '', reading_minutes: '', pages_read: '' };

const StudentDashboard = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [log, setLog] = useState(EMPTY_LOG);
  const [saveError, setSaveError] = useState('');
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const loadMine = () =>
    apiFetch('/api/students/me')
      .then((res) => setData(res))
      .catch((err) => setError(err.message || 'Could not load your reading.'));

  useEffect(() => {
    loadMine().finally(() => setLoading(false));
  }, []); // load once

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
      <h1 className='text-3xl font-bold mb-2'>Hi {user?.user_name}</h1>

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

      {loading && <p className='text-center'>Loading your reading…</p>}
      {error && <p role='alert' className='text-red-600'>{error}</p>}

      {data && (
        <>
          <p className='mb-6'>
            {data.totals.logs} logs · {data.totals.minutes} minutes · {data.totals.pages} pages
          </p>

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
            {data.logs.length === 0 ? (
              <p>No reading logs yet.</p>
            ) : (
              <table className='w-full text-left'>
                <thead>
                  <tr className='border-b'>
                    <th className='p-2'>Date</th>
                    <th className='p-2'>Book</th>
                    <th className='p-2'>Minutes</th>
                    <th className='p-2'>Pages</th>
                  </tr>
                </thead>
                <tbody>
                  {data.logs.map((log) => (
                    <tr key={log.log_id} className='border-b'>
                      <td className='p-2'>{new Date(log.date_read).toLocaleDateString()}</td>
                      <td className='p-2'>{log.book_title}</td>
                      <td className='p-2'>{log.reading_minutes}</td>
                      <td className='p-2'>{log.pages_read}</td>
                    </tr>
                  ))}
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
