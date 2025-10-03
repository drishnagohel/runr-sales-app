import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Admin pages
import AdminDashboard from "../admin/pages/Dashboard";
import AdminMasterPage from "../admin/pages/MasterPage";
import AdminUserProfile from "../admin/pages/UserProfile";
import AdminLogin from "../admin/pages/Login";
import AdminProject from "../admin/pages/Sales/SalesTable";
import AdminPincode from "../admin/pages/Masters/Pincode/PincodeTable";
import AdminAmenityCategory from "../admin/pages/Masters/AmenityCategory/AmenityCategoryTable";
import AdminCreator from "../admin/pages/Masters/Creator/CreatorTable";
import AdminBudget from "../admin/pages/Masters/Budget/BudgetTable";
import AdminLead from "../admin/pages/Lead/LeadTable";
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
        <Route path="/" element={<AdminLogin />} />        
        <Route
          path="/project"
          element={
            <ProtectedRoute>
              <AdminProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lead"
          element={
            <ProtectedRoute>
              <AdminLead />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userprofile"
          element={
            <ProtectedRoute>
              <AdminUserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pincodes"
          element={
            <ProtectedRoute>
              <AdminPincode />
            </ProtectedRoute>
          }
        />
        <Route
          path="/amenitycategory"
          element={
            <ProtectedRoute>
              <AdminAmenityCategory />
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
        <Route
          path="/budget"
          element={
            <ProtectedRoute>
              <AdminBudget />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
