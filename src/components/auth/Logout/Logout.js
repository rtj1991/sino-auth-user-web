import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ onLogout }) {
  const navigate = useNavigate();

  useEffect(() => {
    onLogout();
    navigate('/login', { replace: true });
  }, [navigate, onLogout]);

  return null;
}

export default Logout;
