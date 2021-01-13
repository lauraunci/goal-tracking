import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
    <div className='NavBar'>
        <Link to='/' className='NavBar-link'>Goals List</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to='/add' className='NavBar-link'>Add Goal</Link>
    </div>
);

export default NavBar;