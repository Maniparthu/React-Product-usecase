import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup,render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddProduct from "../components/addproduct";
afterEach(cleanup)

it('renders without crash',()=>{
    render(<div></div>)
  })
it("add product renders without crash",()=>{
    const div=document.createElement("div")
    ReactDOM.render(<AddProduct></AddProduct>, div)
})

it('Button renders in correct way', ()=>{
    const {getByTestId} = render(<AddProduct></AddProduct>)
    expect(getByTestId('addbutton')).toHaveTextContent('Add')
})