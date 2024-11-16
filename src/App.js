import React from 'react';
import Layout from "./pages/Layout"; 
import PublicView from './pages/publicView';
import AdminView from './pages/adminView';
import NoPage from "./pages/noPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  AppRoutes  from './config/routes';

function App() {
  return (
    <BrowserRouter>
    <AppRoutes />  {/* Use the imported routes */}
  </BrowserRouter>
  );
}

export default App;