

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {ToastContainer} from "react-toastify";
import { Login } from './pages/Login/Login'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Register } from './pages/Register/Register';
import { HomePage } from './pages/HomePage/HomePage';

function App() {


  return (
    <Router>
    <div className="App">
      <ToastContainer/>
    
    <div className="container">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
        
   </Routes>
    </div>
  
    </div>
    </Router>
  )
}

export default App
