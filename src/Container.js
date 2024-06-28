 
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <Header />
        <Products/>
       <Footer/>
    </div>
  );
}

export default App;
