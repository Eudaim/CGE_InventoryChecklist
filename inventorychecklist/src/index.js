import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Login from './login'
import DynamicTableAdmin from './dynamicTableAdmin'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/inventory" element={<App/>}/>  
        <Route path="/inventory/admin" element={<DynamicTableAdmin/>} />
        <Route path="/user/login" element={<Login/>} />  
        <Route path="/users" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);