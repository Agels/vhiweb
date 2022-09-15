import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import Login from './component/login';
import User from './component/user';

import ProtectedRoute from './adapter/protected/protectedRoute';
 import PageNotFound from './component/notFound/PageNotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
         <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/user' element={<ProtectedRoute><Home /></ProtectedRoute>} />        
            <Route exact path='/user/:id' element={<User />} />
           <Route path="*" element={<PageNotFound />} />         
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
