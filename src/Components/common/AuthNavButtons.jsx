import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import { FiLogOut } from 'react-icons/fi';
import { IconContext } from 'react-icons';

// Clears the saved tokens and sends the user home
export const LogoutButton = ({ mobile = false }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/');
  };

  if (mobile) {
    return (
      <p className='mt-2' style={{ cursor: 'pointer' }} onClick={onLogout}>
        LOGOUT
      </p>
    );
  }

  return (
    <button onClick={onLogout} aria-label='Log out'>
      <div className='w-18 h-28 p-3 rounded-full border border-teal-800 border-2 bg-teal-600 hover:bg-teal-500'>
        <IconContext.Provider value={{ color: 'white', size: 40 }}>
          <FiLogOut />
        </IconContext.Provider>
      </div>
      <div>
        <p className='text-teal font-fonts text-sm'>LOGOUT</p>
      </div>
    </button>
  );
};