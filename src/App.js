import './App.css';
import Header from './components/Header'
import React, { Component } from 'react';

// class App extends Component {
//   state = {  }
//   render() { 
//     return (  
//        <h1>Hello from a class</h1>   

//     );
//   }
// } 
 
// export default App;

const App = ()=> {
  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
