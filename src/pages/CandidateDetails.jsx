import { useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import { candidates } from "../data/candidates";

import "../styles/candidatedetails.css";

function CandidateDetails() {
  const { id } = useParams();

  const candidate = candidates.find(
    (candidate) => candidate.id === Number(id)
  );

  return (
    <DashboardLayout>
      <div className="details-card">
        <h1>{candidate.name}</h1>

        <p><strong>Role:</strong> {candidate.role}</p>

        <p><strong>ATS Score:</strong> {candidate.score}</p>

        <p><strong>Status:</strong> {candidate.status}</p>

        <p><strong>Email:</strong> candidate@email.com</p>

        <p><strong>Experience:</strong> 2 Years</p>

        <p>
          <strong>Skills:</strong> React, JavaScript, CSS
        </p>
      </div>
    </DashboardLayout>
  );
}

export default CandidateDetails;