import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/todo">ToDo</Link></li>
                        <li><Link to="/addTodo">Add</Link></li>
                        {
                            user ? <button onClick={logout} className="btn btn-ghost">Sign Out</button> : <li><Link to="/login">Login</Link></li>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/todo">All To-Do</Link></li>
                    <li><Link to="/addTodo">Add To-Do</Link></li>
                    {
                        user ? <button onClick={logout} className="btn btn-ghost">Sign Out</button> : <li><Link to="/login">Login</Link></li>
                    }
                </ul>
            </div>
        </div >
    );
};

export default Navbar;