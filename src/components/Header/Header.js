import './Header.scss';
import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../../App';


const Header = () => {

    const authInfo = React.useContext(AuthContext);

    const navigate = useNavigate();

    return (
        <nav className='navigation'>
          <button className='navigation__button' onClick={() => navigate(-1)}>⬅️</button>
          <NavLink className={'navigation__button'} to="/">Home</NavLink>
          <NavLink className={'navigation__button'} to="/productos">Productos</NavLink>
          {!authInfo?.user && <NavLink className={'navigation__button'} to="/login">Login</NavLink>}
          {authInfo?.user && <NavLink className={'navigation__button'} to="/my-account">Mi cuenta</NavLink>}
          <button className='navigation__button' onClick={() => navigate(1)}>➡️</button>
        </nav>
    );
}

export default Header;



