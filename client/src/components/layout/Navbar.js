import React, {Fragment, useContext} from 'react'
import {Link} from 'react-router-dom';
import { UserContext } from "../../state/UserContext";


const Navbar = () => {

  const [token, clearSession, addSession, auth, addUser, removeUser] = useContext(UserContext);

  const logout = () => {
    clearSession();
    removeUser();
  }

  const authLinks = (
    <ul>
      <li style={{marginRight: '3rem'}}>Welcome {auth.user.name}</li>
      <li><Link to='/properties'>Properties</Link></li>  
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i> {' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>  
      <li><Link to='/properties'>Properties</Link></li>   
      <li><Link to='/login'>Login</Link></li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to='/'>PV Real Estate</Link>
      </h1>
      <Fragment>{auth.isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  )
}

export default Navbar;
