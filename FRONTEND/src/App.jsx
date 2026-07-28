import { Routes, Route } from "react-router-dom";

// Home
import Home from "./pages/Home";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Layout
import CitizenLayout from "./layouts/CitizenLayout";

// Citizen Pages
import CitizenDashboard from "./pages/citizen/CitizenDashboard";
import RaiseComplaint from "./pages/citizen/RaiseComplaint";
import ComplaintHistory from "./pages/citizen/ComplaintHistory";
import ComplaintDetails from "./pages/citizen/ComplaintDetails";
import Notifications from "./pages/citizen/Notifications";
import Profile from "./pages/citizen/Profile";

function App() {
  return (
    <Routes>

      {/* Landing Page */}
      <Route path="/" element={<Home />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Citizen Dashboard */}
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
        path="/citizen/history"
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

    </Routes>
  );
}

export default App;