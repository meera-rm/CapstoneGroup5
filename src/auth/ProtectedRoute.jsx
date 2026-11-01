// Guards a group of routes.
//   <Route element={<ProtectedRoute />}>                      → any logged-in user
//   <Route element={<ProtectedRoute roles={['teacher','admin']} />}> → only those roles
// These rules match the authorize(...) calls in the backend controllers.
// The backend still checks every request, so this is about UX, not security.
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ roles }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <p className='text-center mt-10'>Loading…</p>;

  // Not logged in → go to login, and remember where they were going
  if (!user) return <Navigate to='/login' replace state={{ from: location.pathname }} />;

  // Logged in but wrong role
  if (roles && !roles.includes(user.user_role)) {
    return (
      <div className='text-center mt-10'>
        <h1 className='text-2xl font-bold'>Not allowed</h1>
        <p>Your account ({user.user_role}) can't open this page.</p>
      </div>
    );
  }

  return <Outlet />; // render the child route
}
