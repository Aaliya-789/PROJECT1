import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

// Landing Page
import Home from "./pages/Home";

// Authentication Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Error Page
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* =======================
          Public Routes
      ======================== */}

      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      {/* =======================
          Authentication
      ======================== */}

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* =======================
          404 Page
      ======================== */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;