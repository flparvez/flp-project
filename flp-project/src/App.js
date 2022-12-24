import React from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import ResetPassword from './Components/Auth/ResetPassword';

import SendPasswordResetEmail from './Components/Auth/SendPasswordResetEmail';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <BrowserRouter>

    <Navbar/>
      <Routes>
    
     
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/layout' element={<Layout/>}> </Route>
      <Route path='/register' element={<Register/>}> </Route>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/send-password-reset-email' element={<SendPasswordResetEmail/>}> </Route>
      <Route path='reset-password' element={<ResetPassword/>}> </Route>
      <Route path='/profile' element={<Dashboard/>}> </Route>
      
      
      

      </Routes>
    </BrowserRouter>
  );
};

export default App;