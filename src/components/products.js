import React from 'react';
import ProductDetails from './productdetails';
import axios from "axios";
import {Row,Col,PopUp } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'

import 'bootstrap/dist/css/bootstrap.min.css';
class Products extends React.Component {
    constructor(props){
        super(props)
        this.state={
            products:[],
            mycategory:[],
            deleteSuccess:false,
            myid:0,
            filteredProducts:[],
            searchValue:""  ,
            categoryvalue:'',
            name  :''   ,
            category:''    
        }
    }

    intializeState=()=>{
        setTimeout(()=>{
            this.setState({deleteSuccess: false})
        }, 2000)
    }

    componentWillMount(){
        this.getAllProducts()
    }

    componentDidMount(){
        console.log(this.props)    
    }

 
  //  search=(event)=>{
  //      let searchV = event.target.Value
  //      if(searchV===" "){
  //          this.getAllProducts()
  //      }
   //     this.setState({searchValue:searchV})
   //     console.log(searchV)
   //     let searchF= this.state.products.filter(f=> {
   //         return  f.name.toLowerCase().startsWith( searchV.trim().toLowerCase())
   //     })
   //     this.setState({searchProducts:searchF})
  //      console.log(searchF)
  //  }         
  // search=(word)=>{if(word.target.value!==''){
  // let values=this.state.productList.filter((e)=>{
  //     return (e.name.toLocaeLowerCase().includes(word.target.value.toLocaeLowerCase()))
// })
 //  console.log(values)
 //    this.setState({products:values})
 // }else{
 
  //     this.getAllProducts()
 //}
 search=(e)=>{
    let searchV = e.target.value
    if(searchV===''){
        this.getAllProducts()
    }
    this.setState({searchValue: searchV})     
    console.log(searchV);
    let searchF = this.state.products.filter(f=>{
        return  f.name.toLowerCase().startsWith(searchV.trim().toLowerCase())
       
    })
         this.setState({filteredProducts:searchF})
         console.log(searchF)
    
    }

    filter=(e)=>{
        let searchE = e.target.value
        if(searchE===''){
            this.getAllProducts()
        }
        this.setState({categoryvalue: searchE})     
        console.log(searchE);
        let searchF = this.state.products.filter(f=>{
            return  f.category.toLowerCase().startsWith(searchE.trim().toLowerCase())
        })
             this.setState({mycategory:searchF})
             console.log(searchF)
        
        }
 
    getAllProducts=()=>{
        axios.get('http://localhost:3000/allproducts')
                .then(response=>{
                    console.log(response);
                    console.log(response.data)
                    this.setState({products: response.data})
                    console.log(this.state.products);
                }, error=>{
                    console.error(error);
                })
    }

    deleteProductWithId=(id)=>{
        console.log('delete product for received id: ' + id);
        axios.delete('http://localhost:3000/allproducts'+ '/' + id)
                .then(response=>{
                     console.log(response)
                     this.setState({deleteSuccess: true})
                     this.getAllProducts()
                     this.intializeState()
                }, error=>{
                    console.error(error)
                })
    }

    renderAllProducts=()=>{
        if(this.state.searchValue!==""){

             if (this.state.filteredProducts.length === 0) {
                return (
                    <h1  style={{color:'red'}}>
                    couldnt match your searched products
                  </h1>
                   )
            }else{
            return this.state.filteredProducts.map(product=>{
            return(
              
                    <ProductDetails
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        category={product.category}
                        profile={product.image}
                        stock={product.stock}
                        deleteId={this.deleteProductWithId}
                        editId={this.editProductWithId}
                    >

                    </ProductDetails>
                
            )
        })}
    }else{
        return this.state.products.map(product=>{
            return(
              
                    <ProductDetails
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        category={product.category}
                        profile={product.image}
                        stock={product.stock}
                        deleteId={this.deleteProductWithId}
                        editId={this.editProductWithId}
                    >

                    </ProductDetails>
                
            )
        })
    }
    }

    openAddProduct=()=>{
        this.props.history.push('/add')
    }

    editProductWithId=(id)=>{
        this.setState({myid: id})
        console.log('Edit product with id: ' + id);
        this.props.history.push({
                                    pathname: '/editproduct', 
                                    state: {myid: id}
                                })
    }
     carousel= {

        height:'360px'
        
        }
        
          item   ={
        
        height:'360px',
        
        objectFit: 'contain'
        
        }
    render() { 
        return ( 
    
               <div>
                    <Carousel  >
  <Carousel.Item>
    <img
      style={{width:'1400px',height:'300px'}}
      src="./images/welcome.jpeg"
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h2 style={{color:'black'}}>Welcome to the great sale</h2>
       
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >  
    <img
      style={{width:'1400px',height:'300px'}}
      src="./images/sale1.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h2 style={{color:'black'}}>Welcome to the great sale</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{width:'1400px',height:'300px'}}
      src="./images/sale.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h2 style={{color:'white'}}>Welcome to the great sale</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                    <br></br>

                    <Col xl={10}>
                        <Row sm={5}>
                     <input type="search" style={{marginLeft:'100px'}}placeholder="Search Products" onChange={this.search} />
                    </Row>
                    <Row  sm={7}> 
                        {this.renderAllProducts()}
                    </Row>
                    </Col>
            
                    {this.state.deleteSuccess &&
                    <div>
                          <h3>Product deleted success!!!!</h3>  
                    </div>
                    }
                </div>
      
         );
    }
}
 
export default Products;




