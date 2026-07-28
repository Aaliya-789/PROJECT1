import { Routes, Route } from "react-router-dom";

// Layouts
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

      {/* =========================
          Citizen Dashboard
      ========================== */}
      <Route
        path="/citizen/dashboard"
        element={
          <CitizenLayout>
            <CitizenDashboard />
          </CitizenLayout>
        }
      />


      {/* =========================
          Raise Complaint
      ========================== */}
      <Route
        path="/citizen/raise-complaint"
        element={
          <CitizenLayout>
            <RaiseComplaint />
          </CitizenLayout>
        }
      />


      {/* =========================
          Complaint History
      ========================== */}
      <Route
        path="/citizen/complaint-history"
        element={
          <CitizenLayout>
            <ComplaintHistory />
          </CitizenLayout>
        }
      />


      {/* =========================
          Complaint Details
          Example:
          /citizen/complaint-details/101
      ========================== */}
      <Route
        path="/citizen/complaint-details/:id"
        element={
          <CitizenLayout>
            <ComplaintDetails />
          </CitizenLayout>
        }
      />


      {/* =========================
          Notifications
      ========================== */}
      <Route
        path="/citizen/notifications"
        element={
          <CitizenLayout>
            <Notifications />
          </CitizenLayout>
        }
      />


      {/* =========================
          Profile
      ========================== */}
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