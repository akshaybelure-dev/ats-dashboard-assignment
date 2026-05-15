import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/candidateCard.css";

function CandidateCard({ candidate }) {
  return (
    <Link
      to={`/candidates/${candidate.id}`}
      className="candidate-link"
    >
      <div className="candidate-card">

        <div className="candidate-left">

          <img
            src={candidate.avatar}
            alt={candidate.name}
            className="candidate-avatar"
          />

          <div className="candidate-content">

            <h2>{candidate.name}</h2>

            <p>{candidate.role}</p>

            <div className="skills">

              {candidate.skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

        <div className="candidate-right">

          <div className="score-circle">
            {candidate.score}
          </div>

          <span
            className={`status ${candidate.status.toLowerCase()}`}
          >
            {candidate.status}
          </span>

        </div>

      </div>
    </Link>
  );
}

export default CandidateCard;