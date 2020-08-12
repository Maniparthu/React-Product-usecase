import React from 'react';
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class ProductDetails extends React.Component {
    constructor(props){
        super(props)
        this.state ={
        }
       
    }

    deleteCurrentProduct=()=>{
        console.log("delete product with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }

    editProductWithId=()=>{
        console.log("edit product with id: " + this.props.id);
        this.props.editId(this.props.id)
    }

    render() { 
      
        
        return ( 
            <div className="p-2">
            <Card>
                <Card.Img src={"images/" + this.props.profile} alt="imagenotfound" />
                <Card.Body>
                    <Card.Title><u>{this.props.name}</u></Card.Title>
                    
                    <Card.Text>
                        Price : {this.props.price}<br></br>
                             Category : {this.props.category}<br></br>
                    </Card.Text>
                    <Button variant="primary" onClick={this.editProductWithId}>Edit</Button> &nbsp;
                       <Button   variant="danger" onClick={this.deleteCurrentProduct}>Delete</Button>
                </Card.Body>
            </Card>
            </div>
       )
    }
}
 
export default ProductDetails;