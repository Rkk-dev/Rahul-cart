import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Universal/Header';
import Footer from '../Universal/Footer';

const RootLayout = () => {
  return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  );
}

export default RootLayout;
