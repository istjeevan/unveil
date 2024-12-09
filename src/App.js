import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainScreen from "./components/MainScreen/MainScreen";
import LoginScreen from "./components/LoginScreen/LoginScreen";

function App() {
  return (
    <Router>
      <div className="mx-auto bg-white">
        <Routes>
          {/* Redirect "/" to "/login" */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Login Screen */}
          <Route path="/login" element={<LoginScreen />} />

          {/* Main Screen */}
          <Route path="/home" element={<MainScreen />} />

          {/* Catch-all route for miscellaneous paths */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
