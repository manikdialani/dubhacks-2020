import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = { 
    details : ["hello", "world"], 
  } 

  // componentDidMount() { 

  //   let data ; 

  //   axios.get('http://localhost:8000/wel/') 
  //   .then(res => { 
  //       data = res.data; 
  //       this.setState({ 
  //           details : data     
  //       }); 
  //   }) 
  //   .catch(err => {}) 
  // } 

  render() { 
    return( 
      <div> 
            {this.state.details.map((detail, id) =>  ( 
            <div key={id}> 
            <div > 
                  <div > 
                        <h1>{detail.detail} </h1> 
                        <footer >--- by 
                        <cite title="Source Title"> 
                        {detail.name}</cite> 
                        </footer> 
                  </div> 
            </div> 
            </div> 
            ) 
        )} 
      </div> 
    ); 
  } 
}

export default App;
