 
import React from 'react';
import { Navbar, Nav, Container,Div } from 'react-bootstrap';
const FooterComponent = () => (
    <footer>
        <div>
            <div className='app-container row justify-content-between'>
            <div className='col-md-6'>
                <p className='copyrights'><span>stc</span>Copyright stc © 2023  - All rights reserved</p>
            </div>
            <div className='col-md-6'>
                <Nav className="float-end">
                    <Nav.Link href="#">Important Documnets</Nav.Link>
                    <Nav.Link href="#">Privacy Policy</Nav.Link>
                    <Nav.Link href="#">Terms & Conditions</Nav.Link>
                </Nav>
            </div>
            </div>
        </div>                   
    </footer>
);
/* Pass a default theme  */
export default (FooterComponent);
