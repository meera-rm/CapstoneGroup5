// Where each role lands after logging in.
export const homeFor = (role) => {
  if (role === 'teacher' || role === 'admin') return '/teacher-dashboard';
  if (role === 'parent') return '/parent-dashboard';
  if (role === 'student') return '/student-dashboard';
  return '/';
};
