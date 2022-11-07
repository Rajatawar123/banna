
import './App.css';
import React from 'react';  
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import SignUpForm from './pages/SignUpForm';
import Login from './pages/Login';
import Forgot from './pages/Forgot';
import Drop from './pages/Drop';
import Apply_Leave from './Apply_Leave';
import Leave_Tabel from './pages/Leave_Tabel';
import Appbar from './Appbar'
import Holiday_List from './pages/Holiday_List';
// import Reset from "./Reset"
function App() {
  return (
    <>
      {/* <ColorSchemesExample />  */} 
       <BrowserRouter>    
        <Routes>
          <Route path="/" element={<Appbar />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/login" element={<Login />} />
         
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Apply_Leave" element={< Apply_Leave />} />
          <Route path="/Drop" element={< Drop />} />
          <Route path="/Leave_Tabel" element={< Leave_Tabel />} />
          <Route path="/Holiday_List" element={< Holiday_List />} />
        </Routes>

      </BrowserRouter> 
      {/* <Reset /> */}
     
 </>


  );
}

export default App;
