import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import Error from "./Pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Success"
          element={<ProtectedRoute element={<Success />} />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
