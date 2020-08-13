import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid=false));
    return valid;
}
class AddProduct extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            name:'',
            price:0,
            category:'',
            image:'',
            stock:0,
            buttonStatus: false,
            errors: {
            nameError:'',
            priceError:'',
            categoryError:'',
            imageError:''
            },
            buttonStatus: true
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        if(validateForm(this.state.errors)){
            this.setState({buttonStatus:false})
        }else{
            this.setState({buttonStatus:true})
        }
    }
    
    getName=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        let errors=this.state.errors;
        errors.nameError=""||(!event.target.value.match(/^([a-zA-Z0-9_-]+)$/))?"Product Name Should not contain Special Characters" : ""
        this.setState({name: event.target.value})
        
    }
    getPrice=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        let errors=this.state.errors;
        errors.priceError = (!event.target.value.match(/^(?:0|[1-9]\d*)(?:\.(?!.*000)\d+)?$/)) ? "Price is invalid!!" : ""
        this.setState({price:event.target.value})
    }
    getCategory=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        let errors=this.state.errors;
        errors.categoryError=""||(!event.target.value.match(/^([a-zA-Z0-9_-]+)$/))?"CategoryName Should not be null or contain Special Characters" : ""
        this.setState({category: event.target.value})
        
    }
    getImage=(event)=>{
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        console.log(event.target.value.substr(12));
        this.setState({image: event.target.value.substr(12)})
    }
    getStock=(event)=>{
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        console.log(event.target.value.substr(12));
        this.setState({stock: event.target.value})
    }
   
    addProduct=()=>{
     //   if(this.checkValidation()){
        console.log('Add product via axios and post')
        let productRequestBody = {
            "name": this.state.name,
            "price": this.state.price,
            "category": this.state.category,
            "image":this.state.image,
            "stock":this.state.stock
        }
        axios.post(' http://localhost:3000/allproducts', productRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/products')
                }, error=>{
                    console.error(error);
                })
    //}    
}
render() { 
        const textStyle = {
            width:'40%',
            padding:'6px 10px',
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
            <form name="form" onSubmit={this.add} onChange={this.handleSubmit} style={Cointainer}>
                <h3>Add Product</h3>  
                        <div>
                            <label> NAME</label> &nbsp;
                         
                       <input type="text" style={textStyle} id="productname" required placeholder="Product Name *" onChange={this.getName} />
                       
                       <br></br>
                            {this.state.errors.nameError.length > 0 && (
                                <span className="error">{this.state.errors.nameError}</span>
                              )}     
                              
                        </div><br/>

                        <div>
                        <label> PRICE</label> &nbsp;
                            <input type="number" style={textStyle} id="productprice" required placeholder="Product Price *" onChange={this.getPrice} noValidate/>
                            <br></br>
                            {this.state.errors.priceError.length > 0 && (
                                <span className="error">{this.state.errors.priceError}</span>
                              )}  
                        </div><br/>

                        <div>
                        <label> CATEGORY</label> &nbsp;
                        <select value={this.state.category} onChange={this.getCategory} style={textStyle}>
                              <option value="selectcategory">Select Category</option>
                              <option value="electronics">Electronics</option>
                              <option value="clothing">Clothing</option>
                              <option value="stationary">Stationary</option>
                        </select>
                        <br></br>
                        <label>STOCK</label> &nbsp;
                            <input type="number" style={textStyle} id="productprice" required placeholder="Product Stock *" onChange={this.getStock} noValidate/>
                            
                               <br></br>
                            {this.state.errors.categoryError.length > 0 && (
                                <span className="error">{this.state.errors.categoryError}</span>
                              )}  
                        </div><br/>
                       
                        <label>IMAGE</label> &nbsp;

                        <input type="file" style={textStyle} onChange={this.getImage} multiple accept='image/*'></input>
                        <div >
                            <input type="submit" style={ButtonStyle} value="Add" onClick={this.addProduct}  disabled={this.state.buttonStatus} />
                          
                        
                        <Link to="/products">
                            <button type="button" style={CBButtonStyle}>
                                Cancel
                            </button>
                        </Link>
                        
                        </div>
                        
            </form>
            
        </div>
         );
    }
}
 
export default AddProduct;
