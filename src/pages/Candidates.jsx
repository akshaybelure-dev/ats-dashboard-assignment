import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import CandidateCard from "../components/CandidateCard";

import { candidates } from "../data/candidates";

import "../styles/candidates.css";

function Candidates() {
  const [search, setSearch] = useState("");

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="candidates-header">
        <h1>Candidates</h1>

        <input
        className="candidate-search"
          type="text"
          placeholder="Search candidate..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="candidates-list">
        {filteredCandidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Candidates;