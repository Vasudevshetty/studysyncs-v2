import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import AppLayout from "./pages/AppLayout";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Notes from "./pages/Notes";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="notes" element={<Notes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
