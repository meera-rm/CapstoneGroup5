// Parent Dashboard: shows ONLY this parent's children and their reading logs.
// Children are matched by students.parent_email = the parent's login email
// (backend: GET /api/students/mine). The token is attached automatically (src/api.jsx).
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAuth } from '../auth/AuthContext';

const API = import.meta.env.VITE_API_URL;

const formatDate = (d) => (d ? new Date(d).toLocaleDateString() : '');

const ChildCard = ({ child }) => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/api/students/${child.student_id}/logs`)
      .then((res) => setLogs(res.data))
      .catch((err) => console.error('Could not load logs', err))
      .finally(() => setLoading(false));
  }, [child.student_id]);

  const totalMinutes = logs.reduce((sum, log) => sum + (log.reading_minutes || 0), 0);

  return (
    <section className='bg-white rounded shadow p-6 mb-8'>
      <div className='flex items-center gap-4 mb-4'>
        {(child.student_avatar || child.student_image) && (
          <img
            src={child.student_avatar || child.student_image}
            alt=''
            className='h-16 w-16 rounded-full'
          />
        )}
        <div>
          <h2 className='text-2xl font-bold text-teal-700'>{child.student_name}</h2>
          <p>
            Grade {child.grade || '–'} · {child.academic_year || ''}
            {child.reading_level && ` · Reading level ${child.reading_level}`}
          </p>
          <p className='text-sm'>
            {logs.length} logs · {totalMinutes} minutes read
          </p>
        </div>
      </div>

      {loading ? (
        <p>Loading reading logs…</p>
      ) : logs.length === 0 ? (
        <p>No reading logs yet.</p>
      ) : (
        <div className='overflow-x-auto'>
          <table className='w-full text-left'>
            <thead>
              <tr className='border-b'>
                <th className='p-2'>Date</th>
                <th className='p-2'>Book</th>
                <th className='p-2'>Minutes</th>
                <th className='p-2'>Pages</th>
                <th className='p-2'>Thoughts</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.log_id} className='border-b'>
                  <td className='p-2'>{formatDate(log.date_read)}</td>
                  <td className='p-2'>{log.book_title}</td>
                  <td className='p-2'>{log.reading_minutes}</td>
                  <td className='p-2'>{log.pages_read}</td>
                  <td className='p-2'>{log.reading_inference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

const ParentDashboard = () => {
  const { user } = useAuth();
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`${API}/api/students/mine`)
      .then((res) => setChildren(res.data))
      .catch(() => setError('Could not load your children. Please try again.'))
      .finally(() => setLoading(false));
  }, []); // run once, not on every render

  return (
    <main className='max-w-4xl mx-auto px-4 py-10'>
      <h1 className='text-3xl font-bold mb-2'>Hi {user?.user_name}</h1>
      <p className='mb-8'>Here is how your children are doing with their reading.</p>

      {loading && <p>Loading…</p>}
      {error && <p role='alert' className='text-red-600'>{error}</p>}

      {!loading && !error && children.length === 0 && (
        <p>
          No students are linked to <strong>{user?.user_email}</strong> yet. Ask your child's
          teacher to add this email as the parent email on their profile.
        </p>
      )}

      {children.map((child) => (
        <ChildCard key={child.student_id} child={child} />
      ))}
    </main>
  );
};

export default ParentDashboard;
