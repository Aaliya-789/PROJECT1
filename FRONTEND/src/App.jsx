import { Routes, Route } from "react-router-dom";

// Home
import Home from "./pages/Home";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Layouts
import CitizenLayout from "./layouts/CitizenLayout";
import AdminLayout from "./layouts/AdminLayout";
import DepartmentLayout from "./layouts/DepartmentLayout";

// Citizen Pages
import CitizenDashboard from "./pages/citizen/CitizenDashboard";
import RaiseComplaint from "./pages/citizen/RaiseComplaint";
import ComplaintHistory from "./pages/citizen/ComplaintHistory";
import ComplaintDetails from "./pages/citizen/ComplaintDetails";
import Notifications from "./pages/citizen/Notifications";
import Profile from "./pages/citizen/Profile";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageComplaints from "./pages/admin/ManageComplaints";
import ManageDepartments from "./pages/admin/ManageDepartments";
import Analytics from "./pages/admin/Analytics";
import Reports from "./pages/admin/Reports";

// Department Pages
import DepartmentDashboard from "./pages/department/DepartmentDashboard";
import AssignedComplaints from "./pages/department/AssignedComplaints";
import ComplaintDetailsDepartment from "./pages/department/ComplaintDetails";
import UpdateStatus from "./pages/department/UpdateStatus";
import Performance from "./pages/department/Performance";
import DepartmentProfile from "./pages/department/DepartmentProfile";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Citizen */}
      <Route
        path="/citizen/dashboard"
        element={
          <CitizenLayout>
            <CitizenDashboard />
          </CitizenLayout>
        }
      />

      <Route
        path="/citizen/raise-complaint"
        element={
          <CitizenLayout>
            <RaiseComplaint />
          </CitizenLayout>
        }
      />

      <Route
        path="/citizen/complaint-history"
        element={
          <CitizenLayout>
            <ComplaintHistory />
          </CitizenLayout>
        }
      />

      <Route
        path="/citizen/details"
        element={
          <CitizenLayout>
            <ComplaintDetails />
          </CitizenLayout>
        }
      />

      <Route
        path="/citizen/notifications"
        element={
          <CitizenLayout>
            <Notifications />
          </CitizenLayout>
        }
      />

      <Route
        path="/citizen/profile"
        element={
          <CitizenLayout>
            <Profile />
          </CitizenLayout>
        }
      />

      {/* Admin */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        }
      />

      <Route
        path="/admin/users"
        element={
          <AdminLayout>
            <ManageUsers />
          </AdminLayout>
        }
      />

      <Route
        path="/admin/complaints"
        element={
          <AdminLayout>
            <ManageComplaints />
          </AdminLayout>
        }
      />

      <Route
        path="/admin/departments"
        element={
          <AdminLayout>
            <ManageDepartments />
          </AdminLayout>
        }
      />

      <Route
        path="/admin/analytics"
        element={
          <AdminLayout>
            <Analytics />
          </AdminLayout>
        }
      />

      <Route
        path="/admin/reports"
        element={
          <AdminLayout>
            <Reports />
          </AdminLayout>
        }
      />

      {/* Department */}
      <Route
        path="/department/dashboard"
        element={
          <DepartmentLayout>
            <DepartmentDashboard />
          </DepartmentLayout>
        }
      />

      <Route
        path="/department/complaints"
        element={
          <DepartmentLayout>
            <AssignedComplaints />
          </DepartmentLayout>
        }
      />

      <Route
        path="/department/details"
        element={
          <DepartmentLayout>
            <ComplaintDetailsDepartment />
          </DepartmentLayout>
        }
      />

      <Route
        path="/department/update"
        element={
          <DepartmentLayout>
            <UpdateStatus />
          </DepartmentLayout>
        }
      />

      <Route
        path="/department/performance"
        element={
          <DepartmentLayout>
            <Performance />
          </DepartmentLayout>
        }
      />

      <Route
        path="/department/profile"
        element={
          <DepartmentLayout>
            <DepartmentProfile />
          </DepartmentLayout>
        }
      />
    </Routes>
  );
}

export default App;