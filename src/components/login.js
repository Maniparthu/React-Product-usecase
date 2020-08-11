 import React from 'react';
 import {Link}from 'react-router-dom';
  
 import axios from "axios";
 class Login extends React.Component {
     constructor(){
         super()
         this.state={
             userName:'',
             password:'',
             
                
         }
     }

     login=()=>{
        //   if(this.checkValidation()){
           console.log('Add product via axios and post')
           let loginRequestBody = {
               "userName": this.state.userName,
               "password": this.state.password
           }  
           axios.get(' http://localhost:3000/login', loginRequestBody)
                   .then(response=>{
                       console.log(response);
                       this.props.history.push('/products')
                   }, error=>{
                       console.error(error);
                   })
       //}    
   }
     

     getUserName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        
        this.setState({userName: event.target.value})
         
     }
     getPassword=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({category:event.target.value})
     }
    
     render() { 
        const textStyle = {
            width:'40%',
            padding:'12px 20px',
            marging: '8px 0',
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
        let ButtonStyle={
              
                backgroundColor: 'blueviolet',   
                width: '70px',  
                 color: 'orange',   
                 padding: '10px',   
                 margin: '15px  0px', 
                 border: 'none',   
                 cursor: 'pointer',
                 borderRadius: '15px',  
                 boxShadow: '2px 3px',
                
                   
        }
        let CBButtonStyle={
              
            backgroundColor: 'blueviolet',   
            width: '70px',  
             color: 'orange',   
             padding: '10px',   
             margin: '50px  0px', 
             border: 'none',   
             cursor: 'pointer',
             borderRadius: '15px',  
             boxShadow: '2px 3px',
            float:'right'
             
            
               
    }
        let Cointainer={
              
                marginLeft:'200px',
                marginRight:'200px',
                marginTop: '0px',
                 padding: '25px',   
                 backgroundColor: 'lightblue',
                 opacity: '0.8'  
        }
         return ( 
            <div>
            <form name="form" onChange={this.handleSubmit} style={Cointainer}>
            <h3>Login</h3>  
                    <div>
                        <label> UserName</label> &nbsp;
                     
                   <input type="text" style={textStyle} id="username" required placeholder="Product Name *" onChange={this.getUserName} />
                    
                              
                    </div><br/>

                    <div>
                    <label> Password</label> &nbsp;
                        <input type="password" style={textStyle} id="password" required placeholder="Product Price *" onChange={this.getPassword}/>
                    </div><br/>
                    <input type="submit" style={ButtonStyle} value="Login" onClick={this.login}    />
                    
                    <Link to="/signup">
                            <button type="button" style={CBButtonStyle} >
                               Signup
                            </button>
                        </Link>
                 </form>
    </div>
          );
     }
 }
  
 export default Login;