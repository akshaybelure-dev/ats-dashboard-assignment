import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Candidates from "./pages/Candidates";
import Jobs from "./pages/Jobs";
import CandidateDetails from "./pages/CandidateDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/candidates" element={<Candidates />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/candidates/:id" element={<CandidateDetails />}/>
    </Routes>
  );
}

export default App;