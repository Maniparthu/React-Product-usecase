import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddProduct from './addproduct';
import Products from './products'
import EditProduct from './editproduct';
import Dashboard from './dashboard';
import Login from './login';
import Signup from './signup';
class Content extends React.Component {
    state = {}
    render() {
        return (
            <div style={{backgroundImage: "url(" + "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-pd-sasi-03.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=cec9b4798fd70605e2a95fa61259c5db" + ")",}}>
                <Switch>
                   
                
                  
                    <Route path='/add' component={AddProduct}></Route>
                    <Route path='/products' component={Products}></Route>
                    <Route path='/editproduct' component={EditProduct}></Route>
                    <Route path='/dashboard' component={Dashboard}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/signup' component={Signup}></Route>
                </Switch>
            </div>
        );
    }
}

export default Content;