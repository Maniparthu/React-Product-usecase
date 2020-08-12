import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid=false));
    return valid;
}
class EditProduct extends React.Component {
   
    constructor(props){
        super(props)
        console.log(this.props);
        console.log(this.props.location);
        console.log(this.props.location.state);
        //console.log(this.props.location.state.myid);
        this.state={
            name:'',
            price:0,
            category:'',
            image:'',
            id: 0,
            errors: {
                nameError:'',
                priceError:'',
                categoryError:'',
                imageError:''
                },
                buttonStatus: true
        }

    }

    componentWillMount(){
        if(this.props.location.state !== undefined){
            axios.get('http://localhost:3000/allproducts/'+this.props.location.state.myid)
                .then(response=>{
                    console.log(response);
                    this.setState({
                        name: response.data.name,
                        price:response.data.price,
                        category:response.data.category,
                        image:response.data.image,
                        id: response.data.id
                    })
                }, error=>{
                    console.error(error);
                })
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
        this.setState({category:event.target.value})
    }
    getImage=(event)=>{
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        console.log(event.target.value.substr(12));
        
        this.setState({image: event.target.value.substr(12)})
    }

    editFriend=()=>{
        console.log('Edit friend via axios and put')
        let productRequestBody = {
            "name": this.state.name,
            "price":this.state.price,
            "category":this.state.category,
            "image":this.state.image
            

        }
        axios.put('http://localhost:3000/allproducts/'+this.state.id, productRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/products')
                }, error=>{
                    console.error(error);
                })
    }

    render() { 
        if(this.props.location.state === undefined){
            return (
                <div>
                    
                </div>
            )
        }
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
                width: '55px',  
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
                <h1>choosen to edit product with id:{this.props.location.state.myid}  </h1>
                <div>
                <h3>Edit Product</h3>
                <form onChange={this.handleSubmit}> 
                    <div style={Cointainer}>
                <div >
                            <label> Name</label> &nbsp;
                            <input type="text" style={textStyle} id="productname" required value={this.state.name}  onChange={this.getName} />
                            <br></br>
                            {this.state.errors.nameError.length > 0 && (
                                <span className="error">{this.state.errors.nameError}</span>
                              )}     
                        </div><br/>
                        <div>
                        <label> Price</label> &nbsp;
                            <input type="number" style={textStyle} id="productprice" required value={this.state.price}  onChange={this.getPrice}/>
                            {this.state.errors.priceError.length > 0 && (
                                <span className="error">{this.state.errors.priceError}</span>
                              )}  
                        </div><br/>
                        <div>
                        <label> Category</label> &nbsp;
                        <select value={this.state.category} onChange={this.getCategory} style={textStyle}>
                              <option value="edit">{this.state.category}</option>
                              <option value="electronics">Electronics</option>
                              <option value="clothing">Clothing</option>
                              <option value="stationary">Stationary</option>
                        </select>
                           
                                     <br></br>
                            {this.state.errors.categoryError.length > 0 && (
                                <span className="error">{this.state.errors.categoryError}</span>
                              )}
                        </div><br/>
                        <label>Image</label> &nbsp;

                        <input type="file" style={textStyle}   onChange={this.getImage} multiple accept='image/*'></input>
                        <div >
                        </div>
                            <input type="submit" style={ButtonStyle} value="Edit" onClick={this.editFriend} />
                          
                            
                        <Link to="/products">
                            <button type="button" style={CBButtonStyle}>
                                Cancel
                            </button>
                        </Link>
                        
                        </div>
                        
            </form>
            
        </div>
            </div>
         );
    }
}
 
export default EditProduct;