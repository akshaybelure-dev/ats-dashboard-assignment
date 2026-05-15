import DashboardLayout from "../layouts/DashboardLayout";
import SummaryCard from "../components/SummaryCard";
import CandidateCard from "../components/CandidateCard";
import {
  Users,
  Briefcase,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { candidates } from "../data/candidates";


import "../styles/dashboard.css";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="dashboard-cards">

  <SummaryCard
    title="Total Candidates"
    value="120"
    growth="+12% from last week"
    icon={<Users size={22} />}
  />

  <SummaryCard
    title="Total Jobs"
    value="15"
    growth="+4% from last week"
    icon={<Briefcase size={22} />}
  />

  <SummaryCard
    title="Selected"
    value="45"
    growth="+18% from last week"
    icon={<CheckCircle size={22} />}
  />

  <SummaryCard
    title="Rejected"
    value="20"
    growth="-5% from last week"
    icon={<XCircle size={22} />}
  />

</div>

      <div className="candidate-section">
        <h2>Recent Candidates</h2>

        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;