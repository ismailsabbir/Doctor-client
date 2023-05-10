import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
import { Navigate } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const{user}=useContext(AuthContext);
    if(user&&user.uid){
        return children;
    }
return <Navigate to='/login'></Navigate>
};

export default PrivetRoutes;