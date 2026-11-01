import React, { useEffect, useState } from 'react';
import { apiFetch } from '../api';

// Admin only: attach teacher and student records to login accounts
export default function AdminLinks() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(null);

  const load = async () => {
    setError('');
    try {
      setData(await apiFetch('/api/admin/links'));
    } catch (err) {
      setError(err.message || 'Could not load link data');
    }
  };

  useEffect(() => {
    load();
  }, []);

  const save = async (kind, id, userId) => {
    setSaving(`${kind}-${id}`);
    setError('');
    try {
      await apiFetch(`/api/admin/links/${kind}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ user_id: userId }),
      });
      await load();
    } catch (err) {
      setError(err.message || 'Could not save link');
    } finally {
      setSaving(null);
    }
  };

  if (!data) return <p className='p-6'>{error || 'Loading...'}</p>;

  const logins = (role) => data.users.filter((u) => u.user_role === role);

  const Select = ({ kind, record, role }) => (
    <select
      className='border py-1 px-2'
      value={record.user_id ?? ''}
      disabled={saving === `${kind}-${record[`${kind}_id`]}`}
      onChange={(e) =>
        save(kind, record[`${kind}_id`], e.target.value === '' ? null : Number(e.target.value))
      }
    >
      <option value=''>Not linked</option>
      {logins(role).map((u) => (
        <option key={u.user_id} value={u.user_id}>
          {u.user_name} ({u.user_email})
        </option>
      ))}
    </select>
  );

  return (
    <div className='p-6 space-y-10'>
      <h1 className='text-2xl font-bold'>Link accounts</h1>
      {error && <p className='text-red-600'>{error}</p>}

      <section>
        <h2 className='text-xl font-bold mb-3'>Teachers</h2>
        <table className='w-full text-left border'>
          <thead>
            <tr><th className='p-2'>Teacher</th><th className='p-2'>School</th><th className='p-2'>Login</th></tr>
          </thead>
          <tbody>
            {data.teachers.map((t) => (
              <tr key={t.teacher_id} className='border-t'>
                <td className='p-2'>{t.teacher_name}</td>
                <td className='p-2'>{t.school_name || '—'}</td>
                <td className='p-2'><Select kind='teacher' record={t} role='teacher' /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className='text-xl font-bold mb-3'>Students</h2>
        <table className='w-full text-left border'>
          <thead>
            <tr><th className='p-2'>Student</th><th className='p-2'>Parent email</th><th className='p-2'>Login</th></tr>
          </thead>
          <tbody>
            {data.students.map((s) => (
              <tr key={s.student_id} className='border-t'>
                <td className='p-2'>{s.student_name}</td>
                <td className='p-2'>{s.parent_email || '—'}</td>
                <td className='p-2'><Select kind='student' record={s} role='student' /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
