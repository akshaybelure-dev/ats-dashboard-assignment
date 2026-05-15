import DashboardLayout from "../layouts/DashboardLayout";
import JobCard from "../components/JobCard";

import { jobs } from "../data/jobs";

import "../styles/jobs.css";

function Jobs() {
  return (
    <DashboardLayout>
      <div className="jobs-header">
        <h1>Jobs</h1>
      </div>

      <div className="jobs-list">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Jobs;