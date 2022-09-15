import React from 'react'
import {useNavigate} from 'react-router-dom';
import "./notfound.scss";
function PageNotFound() {
    const navigate = useNavigate();
  return (
    <div className="contain">
        <h1 class="display-1 fw-bold text-primary">404</h1>
         <button onClick={() => navigate('/')} className="btn btn-primary">Go Back</button>
    </div> 
      )
}

export default PageNotFound