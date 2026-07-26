import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CitizenDashboard from "./pages/CitizenDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import DepartmentDashboard from "./pages/DepartmentDashboard";
import ReportIssue from "./pages/ReportIssue";
import ComplaintDetails from "./pages/ComplaintDetails";
import Profile from "./pages/Profile";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/citizen" element={<CitizenDashboard />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/department" element={<DepartmentDashboard />} />

        <Route path="/report" element={<ReportIssue />} />

        <Route path="/complaint/:id" element={<ComplaintDetails />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
