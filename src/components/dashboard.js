import React from 'react';
import { Chart } from "react-google-charts";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            priceData: [],
            stockData: [],
            electronics: 0,
            clothing: 0,
            stationary: 0
        }
    }
    componentWillMount() {
        this.getAllProducts()

    }
    getAllProducts() {
        axios.get(' http://localhost:3100/allproducts')
            .then(response => {
                this.setState({
                    products: response.data,
                })
                this.data()
                this.dataPrice(this.state.products)
            }, error => {
                console.error(error)
            })
    }

    data = () => {
        this.state.products.map(product => {
            if (product.category === 'electronics') {
                this.setState({
                    electronics: this.state.electronics + parseInt(product.stock)
                })
            }
            if (product.category === 'clothing') {
                this.setState({ clothing: this.state.clothing + parseInt(product.stock) })
            }
            if (product.category === 'stationary') {
                this.setState({ stationary: this.state.stationary + parseInt(product.stock) })
            }
        })
    }
    dataPrice = (products) => {
        let price = [["Product", "Price"]]
        for (const data of products) {
            price.push([data.name, parseInt(data.price)])
        }
        this.setState({ priceData: price })
    }
    render() {
        return (
            <div style={{backgroundColor:'lightblue'}}>
                <div style={{ float: 'left', margin: '80px', backgroundColor: 'lightblue' }}>
                    <Chart
                        width='700px'
                        height='370px'
                        chartType="PieChart"
                        loader={<span>Loading Chart...</span>}
                        data={[
                            ['Category', 'stock'],
                            ['electronics', this.state.electronics],
                            ['clothing', this.state.clothing],
                            ['stationary', this.state.stationary]
                        ]}
                        options={{                           
                            pieHole: 0,
                            backgroundColor: 'lightblue',
                        }}
                    />
                </div>
                <div style={{ float: 'left', marginLeft: '120px', marginTop: '80px' }}>
                    <Chart
                        width='600px'
                        height='370px'
                        chartType="Bar"
                        loader={<span>Loading Chart...</span>}
                        data={this.state.priceData}
                        options={{
                            title: 'Price Based on Product',
                            colors: ['grey'],
                            backgroundColor: 'lightblue'

                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Dashboard;