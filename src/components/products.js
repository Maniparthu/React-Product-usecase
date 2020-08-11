import React from 'react';
import ProductDetails from './productdetails';
import axios from "axios";
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Products extends React.Component {
    constructor(props){
        super(props)
        this.state={
            products:[],
            deleteSuccess:false,
            myid:0,
            filteredProducts:[],
            searchValue:""  ,
            name  :''       
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
            return this.state.filteredProducts.map(product=>{
            return(
              
                    <ProductDetails
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        category={product.category}
                        profile={product.image}
                        deleteId={this.deleteProductWithId}
                        editId={this.editProductWithId}
                    >

                    </ProductDetails>
                
            )
        })
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
   
    render() { 
        return ( 
    
               <div>
                    
                    <br></br>
                    <input type="search" style={{marginLeft:'780px'}}placeholder="Search.." onChange={this.search} />
                     <Col>
                    <Row>
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




