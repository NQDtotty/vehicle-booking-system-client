import React, { useRef } from 'react';
import { Container, Row } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import './header.css';

const navLinks = [
    {
        path: '/home',
        display: "Home"
    },
    {
        path: '/trip',
        display: "Trip"
    },
    {
        path: '/contact',
        display: "Contact"
    },
    {
        path: '/about',
        display: "About"
    }
]

export default function Header() {
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle("show-menu");

    return (
        <header>
            <Container>
                <Row>
                    <div className="w-100 nav-wrapper d-flex align-items-center justify-content-between">
                        <div className='header-logo'>
                            <img src="./images/logo.png" alt='logo-img' />
                        </div>

                        <div className='header-nav' ref={menuRef} onClick={toggleMenu}>
                            <ul className='nav-menu d-flex align-items-center gap-4'>
                                {
                                    navLinks.map((item, index) => (
                                        <li className='nav-item' key={index}>
                                            <NavLink className={navClass => navClass.isActive ? "active-link" : ""} to={item.path}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='header-right d-flex align-items-center gap-4'>
                            <div className='nav-btn d-flex align-items-center'>
                                <button className='btn secondary-btn'>
                                    <Link to='/login'>Login</Link>
                                </button>
                                <button className='btn primary-btn'>
                                    <Link to='/register'>Register</Link>
                                </button>
                            </div>
                            <span className='menu-mobile' onClick={toggleMenu}>
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}
