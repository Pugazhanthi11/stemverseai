import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import CameraScan from "../pages/CameraScan";
import UploadImage from "../pages/ImageUpload";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Result from "../pages/Result";
import History from "../pages/History";
import Quiz from "../pages/Quiz";
import SavedLessons from "../pages/SavedLessons";
import ProtectedRoute from "../components/ProtectedRoute";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

<Route path="/login" element={<Login />} />

<Route path="/register" element={<Register />} />

<Route path="/result" element={<Result />} />
       <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/camera"
  element={
    <ProtectedRoute>
      <CameraScan />
    </ProtectedRoute>
  }
/>

<Route
  path="/upload"
  element={
    <ProtectedRoute>
      <UploadImage />
    </ProtectedRoute>
  }
/>

<Route
  path="/history"
  element={
    <ProtectedRoute>
      <History />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/quiz"
  element={
    <ProtectedRoute>
      <Quiz />
    </ProtectedRoute>
  }
/>

<Route
  path="/saved-lessons"
  element={
    <ProtectedRoute>
      <SavedLessons />
    </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;