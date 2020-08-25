import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/login'

afterEach(cleanup)

afterEach(cleanup)
it('renders without crash',()=>{
    render(<div></div>)
  })
