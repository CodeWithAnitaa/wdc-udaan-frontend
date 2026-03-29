import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ComplaintForm from './pages/ComplaintForm';
import TrackComplaints from './pages/TrackComplaints';
import BottomNav from './components/ui/BottomNav';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/complaint-form" element={<ComplaintForm />} />
        <Route path="/track-complaints" element={<TrackComplaints />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
      <BottomNav />
    </Router>
  );
}

export default App;
