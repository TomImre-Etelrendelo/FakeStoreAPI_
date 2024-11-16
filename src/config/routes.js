import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import PublicView from '../pages/publicView'    
import AdminView from '../pages/adminView'
import NoPage from "../pages/noPage";
import SelectedProduct from "../public/publicComponents/SelectedProduct";



function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PublicView />} />
        <Route path="admin" element={<AdminView />} />
        <Route path="public" element={<PublicView />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/product/:productId" element={<SelectedProduct />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;