import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    state = { 
        
     }
    render() {
        const headerStyle={
           backgroundColor:'black',
          color:'white',
            padding:'5px'
         
        } 
        const imageStyle={
            verticalalign: 'middle',
            width: '60px',
            height: '60px',
            borderradius: '60%'
        }
       
        const menuitem = {
            display: 'inline',
            padding: '20px'
        }
        const navbarStyle = {
            backgroundColor: 'lightpink',
            padding:'2px'
        }
        
        return (  
            <div style={navbarStyle}>
            <a href="/dashboard">
              
            <img src = "images/logo.png"alt="logo" style={imageStyle}/></a>
            <ul style={headerStyle}>
                    <li style={menuitem}>
                         <Link to='/dashboard' style={{color:'white'}}>DashBoard</Link>
                    </li>
                    <li style={menuitem}>
                         <Link to='/products' style={{ color:'white'}}>Products</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to='/add' style={{ color:'white'}}>Add Product</Link>
                    </li>
                    
                    <li style={menuitem}>
                        <Link to='/signout' style={{ color:'white'}}>signout</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to='/login' style={{ color:'white'}}>Login</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to='/Signup' style={{ color:'white'}}>Signup</Link>
                    </li>
            </ul>
            
            
                
        
       
        
            </div>
        );
    }
}
 
 
export default Header;