import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
import { Navigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import './PrivetRoutes.css'
const PrivetRoutes = ({children}) => {
    const{user,loading}=useContext(AuthContext);
    if(loading){
        return <div className='spinner'><Spinner animation="border" variant="primary" /></div>
    }
    if(user&&user.uid){
        return children;
    }
return <Navigate to='/login'></Navigate>
};

export default PrivetRoutes;