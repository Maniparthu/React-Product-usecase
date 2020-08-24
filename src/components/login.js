 import React from 'react';
 import {Link}from 'react-router-dom';  
 import axios from "axios";
 import 'bootstrap/dist/css/bootstrap.min.css';
 class Login extends React.Component {
     constructor(props){
         super(props)
         this.state={
             login:[],
             userName:'',
             password:'',
             wrongPassword: false,
             wrongUser: false,
             invalidUser:true,
             invlaidPassword:true               
         };
     }

     login = () => {
        axios.get('http://localhost:3100/login')
            .then(response => {
                this.setState({ login: response.data })
                var loginuser = this.state.login.find(user => user.userName === this.state.userName)
                if (loginuser === undefined) {
                    this.setState({ wrongUser: true })
                } else {
                    if (loginuser.password === this.state.password) {
                        this.setState({ userName: loginuser.userName })
                        
                        this.props.history.push('/dashboard')
                    } else {
                        this.setState({ wrongPassword: true })
                    }
                }
            }, error => { console.error(error); })

    }

     getUserName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)       
        if (event.target.value.includes(this.state.userName)) {
            this.setState({invalidUser : false})
            this.setState({ userName: event.target.value })
        }else{
            this.setState({invalidUser : true})
        }
    }

     getPassword=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({ wrongPassword: false })
        if(event.target.value === ''){
            this.setState({invalidPassword : true})
        }else{
            this.setState({invalidPassword:false})
        this.setState({ password: event.target.value })
        }
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
                
                marginLeft:'220px',
                marginRight:'200px',
                marginTop: '0px',
                 padding: '25px',   
                 backgroundColor: 'lightblue',
                 opacity: '0.8'  ,
                 display: 'flex',
                 flexDirection: 'column'
        }
       
        
                
         return ( 
             <div  expand="lg">
            <div  className="login">
            <form name="form" onChange={this.handleSubmit} style={Cointainer}>
            {this.state.wrongUser && <h3 style={{color:'red'}} className='error'>Invalid UserName</h3>}
                        {this.state.wrongPassword && <h3 style={{color:'red'}} className='error'>Invalid Password</h3>}
            <h3>Login</h3>  
                    <div>
                        <label> UserName</label> &nbsp;
                     
                   <input type="text" style={textStyle} id="username" required placeholder="Product Name *" onChange={this.getUserName} />
                    
                              
                    </div><br/>

                    <div>
                    <label> Password</label> &nbsp;
                        <input type="password" style={textStyle} id="password" required placeholder="Product Price *" onChange={this.getPassword}/>
                    </div><br/>
                    {this.state.invalidPassword && <span className='error'>Password is required</span>}
                    <input type="submit" style={ButtonStyle} value="Login" onClick={this.login}  disabled={this.state.invalidUser || this.state.invalidPassword}  />
                    
                    <Link to="/signup">
                            <button type="button" style={CBButtonStyle} >
                               Signup
                            </button>
                        </Link>
                 </form>
    </div>
    </div>
  
    
          );
     }
 }
  
 export default Login;