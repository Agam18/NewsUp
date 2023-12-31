
import './App.css';


import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Textform from './Components/Textform';


import { BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      
      <div >
        
        <Router>
        <Navbar/>
        {/* <News key="" pageSize={6} country="in" category="general"/> */}
        <Routes>
            <Route path="/" element={<News key="general" pageSize={6} country="in" category="general" />}></Route>
            <Route path='/business' element={<News key="business" pageSize={6} country="in" category="business" />}></Route>
            <Route path='/entertainment' element={<News key="entertainment" pageSize={6} country="in" category='entertainment' />}></Route>
            <Route path="/general" element={<News key="general" pageSize={6} country="in" category="general" />}></Route>
            <Route path="/health" element={<News key="health" pageSize={6} country="in" category="health" />}></Route>
            <Route path="/science" element={<News key="science" pageSize={6} country="in" category="science" />}></Route>
            <Route path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports" />}></Route>
            <Route path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology" />}></Route>
            <Route path="/Editor" element={<Textform />}></Route>
        </Routes>
        </Router>
      </div>
      
    )
  }
}

