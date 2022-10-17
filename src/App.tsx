import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardComponent from './Components/Dashboard/Dashboard.component';
import "bootstrap/dist/css/bootstrap.min.css";
export class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Router>
            <div className='app-container'>
              <Routes>
                <Route path="/" element={<DashboardComponent/>} />
              </Routes>
            </div>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App;
