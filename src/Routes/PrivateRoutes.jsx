import React, { use, useContext } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);

    if (loading) {
        return <div>Loading...</div>
    }
    if (!user) {
        return <Navigate state={location?.pathname} to='/signin' ></Navigate>
    }
    return children;
};

export default PrivateRoutes;