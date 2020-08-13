import React from 'react';
import {Pie,  } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';

const state = {
  labels: ['Laptop', 'Mobile', 'tab',
           'shirt', 'Pant','Tv'],
  datasets: [
    {
      label: 'Products',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4',
        'lightpink'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F',
      'darkpink'
      ],
      data: [3, 5, 2, 3, 1,2]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'PRODUCTS',
              fontSize:20
            },
          }}
        />

      </div>
    );
  }
}