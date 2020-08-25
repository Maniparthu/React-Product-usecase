import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup,render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Products from '../components/products';

afterEach(cleanup)
it('renders without crash',()=>{
    render(<div></div>)
  })
