// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, {Component} from 'react';
// import './App.css'

// class App extends Component {
//   render (){
//     return (
//       <div className='App'>
//         <h3>My First Project In React JS</h3>
//         <p>Learn React JS Is Easy</p>
//       </div>
 // <div className="App container">
      //     <div className="alert alert-dark">
      //       <h3 className="text-dark">My First Project In React</h3>
      //       <Navbar/>
      //       <p></p>
      //       <button className="mr-5 btn btn-outline-success">Agree</button>
      //       <button className="btn btn-outline-danger">Don't Agree</button>
      //     </div>
      //   </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import "./App.css";
import Navigationbar from "./components/Navigationbar";
import Intro from "./components/Intro";
import Menswear from "./components/Menswear"
import "./style/landingPage.css"

class App extends Component {
  render() {
    return (
     
      <div>
        {/* Intro Section */}
        <div className="MyBg">
        <Navigationbar/>
        <Intro/>
        </div>
        {/* End Of Intro Section */}
        
        {/* Man Section */}
        <div className="Meanswear">
        <Menswear/>
        </div>
        {/* End of Man Section */}

        
      </div>
    );
  }
}
export default App;
