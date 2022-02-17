import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../images/log.webp"

export default function Navbar(props) {


    return (
        <div>
            <nav className='navbar d-flex justify-content-between p-3'>
                <ul className=' list-unstyled d-flex '>
                    <li className='px-2'><NavLink to='/home'> <img src={logo} /></NavLink></li>

                    {props.loginUser ?
                        <>  <li className='px-2'> <NavLink to='/home'>Home</NavLink></li>
                            <li className='px-2'> <NavLink to='/tvshows'>Tv shows</NavLink></li>
                            <li className='px-2'> <NavLink to='/movies'>Movies</NavLink></li>
                            <li className='px-2'> <NavLink to='/people'>People</NavLink></li>

                        </> : ''}



                </ul>

                <ul className=' list-unstyled d-flex'>

                    <li className='px-2'><a href="https://www.google.com/"> <i className='fab fa-facebook'></i> </a></li>
                    <li className='px-2'><a href="https://www.google.com/"> <i className='fab fa-instagram'></i> </a></li>
                    <li className='px-2'><a href="https://www.google.com/"> <i className='fab fa-twitter'></i> </a></li>

                    {props.loginUser ?
                        <><li onClick={props.logOut} className='px-2'>Logout</li></>
                        :
                        <>
                            <li className='px-2'> <NavLink to='/register'>Register</NavLink></li>
                            <li className='px-2'> <NavLink to='/login'>Login</NavLink></li>
                        </>}
                </ul>
            </nav>

        </div>
    )
}
