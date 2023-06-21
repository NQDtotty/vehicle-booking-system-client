import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Router from '../../routers/Router';

export default function Layout() {
    return (
        <>
            <Header></Header>
            <Router></Router>
            <Footer></Footer>
        </>
    )
}
