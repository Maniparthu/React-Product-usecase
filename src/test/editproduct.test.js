
import React from 'react';
import {cleanup,render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditProduct from '../components/editproduct';

afterEach(cleanup)
it('renders without crash',()=>{
    render(<div></div>)
  })
