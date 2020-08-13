import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Nav} from "react-bootstrap"
class Header extends React.Component {
    state = { 
        
     }
    render() {
       
        const imageStyle={
            verticalalign: 'middle',
            width: '60px',
            height: '60px',
            borderradius: '60%'
        }
        
        return (  
          <div>  
            <Navbar bg="dark" variant="dark">
            <Link to='/login'>  <img src = "images/logo.png"alt="logo" style={imageStyle}/></Link>
    <Navbar.Brand href="#home">PRODUCT INVENTRY</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href='#dashboard'>Dashboard</Nav.Link>
      <Nav.Link href="#products">Products</Nav.Link>
      <Nav.Link href="#add">Add product</Nav.Link>
      <Nav.Link href="#signout">Signout</Nav.Link>
      <Nav.Link href="#login">Login</Nav.Link>
      <Nav.Link href="#Signup">Signout</Nav.Link>
    </Nav>
  </Navbar>        
            </div>
        );
    }
}
 
 
export default Header;