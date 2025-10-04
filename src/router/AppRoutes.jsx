import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Admin pages
import AdminDashboard from "../admin/pages/Dashboard";
import AdminMasterPage from "../admin/pages/MasterPage";
import AdminUserProfile from "../admin/pages/UserProfile";
import AdminLogin from "../admin/pages/Login";
import AdminSales from "../admin/pages/Sales/SalesTable";
import AdminCreator from "../admin/pages/Masters/Creator/CreatorTable";
import AdminSalesperson from "../admin/pages/Masters/Salesperson/SalespersonTable";
import AdminSMM from "../admin/pages/Masters/SMM/SMMTable";
import ProtectedRoute from "../admin/components/ProtectedRoute"; // adjust path

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/masters"
          element={
            <ProtectedRoute>
              <AdminMasterPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sales"
          element={
            <ProtectedRoute>
              <AdminSales />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<AdminLogin />} />                        
        <Route
          path="/userprofile"
          element={
            <ProtectedRoute>
              <AdminUserProfile />
            </ProtectedRoute>
          }
        />                
        <Route
          path="/salesperson"
          element={
            <ProtectedRoute>
              <AdminSalesperson />
            </ProtectedRoute>
          }
        />
        <Route
          path="/smm"
          element={
            <ProtectedRoute>
              <AdminSMM />
            </ProtectedRoute>
          }
        />
        <Route
          path="/creator"
          element={
            <ProtectedRoute>
              <AdminCreator />
            </ProtectedRoute>
          }
        />        
      </Routes>
    </Router>
  );
}
