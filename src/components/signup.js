import React from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            login:[],
            userName:'',
            password:'',
            email:''
    }
}

    getUserName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({userName:event.target.value})
     }
     getPassword=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({password:event.target.value})
     }
     getEmail=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({email:event.target.value})
     }

     Signup=()=>{
        //   if(this.checkValidation()){
           console.log('Registerd')
           let productRequestBody = {
               "userName": this.state.userName,
               "password": this.state.password,
               "email": this.state.email
              
           }
           axios.post(' http://localhost:3000/login', productRequestBody)
                   .then(response=>{
                       console.log(response);
                       this.props.history.push('/login')
                   }, error=>{
                       console.error(error);
                   })
       //}    
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
                width: '80px',  
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
            <form name="form" onSubmit={this.add} style={Cointainer}>
            <h3>Signup</h3>  
                    <div>
                        <label> UserName</label> &nbsp;
                     
                   <input type="text" style={textStyle} id="username" required placeholder="Product Name *" onChange={this.getUserName} />
                    </div><br/>
                    <div>                    <label>Email</label>
                    <input type="email" style={textStyle} id="email" required placeholder="email"       onChange={this.getEmail}/>             
                    </div><br/>
                     <div>
                    <label> Password</label> &nbsp;
                        <input type="password" style={textStyle} id="password" required placeholder="Product Price *" onChange={this.getPassword}/>
                    </div><br/>
                    <input type="submit" style={ButtonStyle} value="Register" onClick={this.Signup}  disabled={this.state.buttonStatus} />
                    
                   
                    <Link to="/login">
                            <button type="button" style={CBButtonStyle}>
                                Cancel
                            </button>
                        </Link>
                 </form>
    </div>
           
        );
    }
    }


 
export default Signup;