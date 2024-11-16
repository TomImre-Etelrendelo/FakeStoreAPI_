import React from 'react';
import Layout from "./pages/Layout"; 
import PublicView from './pages/publicView';
import AdminView from './pages/adminView';
import NoPage from "./pages/noPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  AppRoutes  from './config/routes';
import { ApiProvider } from "./contexts/apiContext"; // Import ApiProvider

function App() {
  return (
    <BrowserRouter>
    <ApiProvider>
    <AppRoutes />  {/* Use the imported routes */}
    </ApiProvider>
  </BrowserRouter>
  );
}

export default App;