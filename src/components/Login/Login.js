import './Login.scss';
import React from 'react';
import { AuthContext } from '../../App';
import { Navigate } from "react-router-dom";

const Login = ({setAuthInfo}) => {
    
    const authInfo = React.useContext(AuthContext);

    return (
        <>
            {   
                authInfo?.user ?
                    <Navigate to="/my-account" replace={true}></Navigate>
                    : <button onClick={(() => setAuthInfo({user: "Humberto"}))}>Login</button>
            }
        </>
    );
}

export default Login;