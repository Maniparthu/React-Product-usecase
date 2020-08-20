import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Nav} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends React.Component {
    state = { 
        
     }
    render() {
       
        const imageStyle={
            verticalalign: 'middle',
            width: '70px',
            height: '70px',
            borderradius: '100%',
            radius:'60%'
        }
        
        return (  
          <div>  
            <Navbar bg="dark" variant="dark" expand="lg" >
            <Nav.Link to='#login'>  <img src = "images/logo2.png"alt="logo" style={imageStyle}/></Nav.Link>
    <Navbar.Brand href="#home">PRODUCT INVENTRY</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="#login">Login</Nav.Link>
      <Nav.Link href='#dashboard'>Dashboard</Nav.Link>
      <Nav.Link href="#products">Products</Nav.Link>
      <Nav.Link href="#add">Add product</Nav.Link>
      <Nav.Link href="#signout">Signout</Nav.Link>
      
      <Nav.Link href="#Signup">SignUP</Nav.Link>
    </Nav>
  </Navbar>        
            </div>
        );
    }
}
 
 
export default Header;