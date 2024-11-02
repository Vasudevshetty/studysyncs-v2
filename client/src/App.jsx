import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import HomeLayout from "./pages/HomeLayout";
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
import GPACalculator from "./components/App/GPACalculator/GPACalculator";
import Timetable from "./components/App/Attendance/Timetable/Timetable";
import { ModalProvider } from "./components/context/ModalContext";
import SGPACalculator from "./components/App/GPACalculator/SGPACalculator";
import CGPACalculator from "./components/App/GPACalculator/CGPACalculator";
import HomeLayout2 from "./pages/HomeLayout2";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CheckUsn from "./pages/CheckUsn";
import VerifyUsn from "./pages/VerifyUsn";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ModalProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomeLayout2 />} />
              <Route path="/check-usn" element={<CheckUsn />} />
              <Route path="/verify-usn" element={<VerifyUsn />} />

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

                <Route path="notes">
                  <Route path="" element={<Notes />} />
                </Route>

                <Route path="profile" element={<Profile />} />
                <Route path="events" element={<Events />} />
                <Route path="discuss" element={<Discuss />} />
                <Route path="calculate-gpa">
                  <Route path="" element={<GPACalculator />} />
                  <Route path="sgpa" element={<SGPACalculator />} />
                  <Route path="cgpa" element={<CGPACalculator />} />
                </Route>
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </ModalProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
