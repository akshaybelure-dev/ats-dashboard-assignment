import {
  MapPin,
  Briefcase,
  Users,
} from "lucide-react";

import "../styles/jobcard.css";

function JobCard({ job }) {

  return (
    <div className="job-card">

      <div className="job-top">

        <div>

          <h2>{job.title}</h2>

          <p className="company-name">
            {job.company}
          </p>

        </div>

        <span className="job-badge">
          Active
        </span>

      </div>

      <div className="job-bottom">

        <div className="job-meta">

          <span>
            <MapPin size={16} />
            {job.location}
          </span>

          <span>
            <Briefcase size={16} />
            Full Time
          </span>

        </div>

        <div className="applicants">

          <Users size={16} />

          {job.applicants} Applicants

        </div>

      </div>

    </div>
  );
}

export default JobCard;