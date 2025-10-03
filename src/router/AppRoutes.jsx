import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Admin pages
import AdminDashboard from "../admin/pages/Dashboard";
import AdminMasterPage from "../admin/pages/MasterPage";
import AdminLogin from "../admin/pages/Login";
import AdminProject from "../admin/pages/Project/ProjectsTable";
import AdminPincode from "../admin/pages/Masters/Pincode/PincodeTable";
import AdminAmenityCategory from "../admin/pages/Masters/AmenityCategory/AmenityCategoryTable";
import AdminCreator from "../admin/pages/Masters/Creator/CreatorTable";
import AdminBudget from "../admin/pages/Masters/Budget/BudgetTable";
import AdminLead from "../admin/pages/Lead/LeadTable";
// import AdminUsers from "../admin/pages/Users";

// Website pages
// import Home from "../website/pages/Home";
// import About from "../website/pages/About";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/masters" element={<AdminMasterPage />} />
        <Route path="/" element={<AdminLogin />} />        
        <Route path="/project" element={<AdminProject />} />
        <Route path="/lead" element={<AdminLead />} />
          {/* Website Routes */}
          <Route path="/pincodes" element={<AdminPincode />} />
          <Route path="/amenitycategory" element={<AdminAmenityCategory />} />
          <Route path="/creator" element={<AdminCreator />} />
          <Route path="/budget" element={<AdminBudget />} />
        

        {/* Website Routes */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}
