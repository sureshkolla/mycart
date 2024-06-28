
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Div } from 'react-bootstrap';

const HeaderComponent = () => {
    const [clicked, setClicked] = useState(false);
    const handleCategoryChange = () => {
        setClicked(!clicked);        
      };
    return (
        <header className='position-sticky'>
            <div className='app-container'>
                {/* <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand></Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link className='mx-2' href="#">Deals</Nav.Link>
                        <Nav.Link className='mx-2' href="#">Devices</Nav.Link>
                        <Nav.Link className='mx-2' href="#">Mobile</Nav.Link>
                        <Nav.Link className='mx-2' href="#">Internet</Nav.Link>
                        <Nav.Link className='mx-2' href="#">Gaming</Nav.Link>
                        <Nav.Link className='mx-2' href="#">Entertainment</Nav.Link>
                        <Nav.Link className='mx-2' href="#">Sales and Support</Nav.Link>
                        <Nav.Link className='mx-2' href="#">5G</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar> */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                        <img style={{ height: '42px' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/STC-01.svg/250px-STC-01.svg.png' />
                    </a>
                    <button onClick={(e) => handleCategoryChange()} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div onClick={(e) => setClicked(false)}  style={{display:(clicked)?'block':'none'}} class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Deals</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Devices</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Mobile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Internet</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Gaming</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Entertainment</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sales & Support</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">5G</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>

        </header>
    );

}
/* Pass a default theme  */
export default (HeaderComponent);
