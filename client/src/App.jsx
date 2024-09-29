import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Dashboard from "./components/App/Dashboard/Dashboard";
import Attendance from "./components/App/Attendance/Attendance";
import Notes from "./components/App/Notes/Notes";
import ProtectedRoute from "./utils/ProtectedRoute";
import { ThemeProvider } from "./components/context/ThemeContext";
import Profile from "./components/App/Profile";
import Discuss from "./components/App/Discuss";
import Events from "./components/App/Events";
import GPACalculator from "./components/App/GPACalculator";
import Timetable from "./components/App/Attendance/Timetable/Timetable";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="attendance">
              <Route path="" element={<Attendance />} />
              <Route path="timetable" element={<Timetable />} />
            </Route>
            <Route path="notes" element={<Notes />} />
            <Route path="profile" element={<Profile />} />
            <Route path="events" element={<Events />} />
            <Route path="discuss" element={<Discuss />} />
            <Route path="calculate-gpa" element={<GPACalculator />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
