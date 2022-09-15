import React from 'react'
import { useNavigate } from 'react-router-dom';
function Navbars() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/')
    }
  return (
    <div>
        <button className="btn btn-danger" onClick={logout}> Logout</button>
    </div>
  )
}

export default Navbars