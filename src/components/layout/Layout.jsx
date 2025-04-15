import React from 'react';
import Header from '../header/Header'; 
import { BrowserRouter } from 'react-router-dom';
import Container from '@mui/material/Container'; //
import Routing from '../routing/Routing';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div className="layout">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
            <Routing />
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
};
export default Layout;
