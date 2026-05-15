import "../styles/summarycard.css";
import { motion } from "framer-motion";

function SummaryCard({
  title,
  value,
  icon,
  growth,
}) {
  return (
    <div className="summary-card">
      <div className="card-top">
        <h3>{title}</h3>

        <div className="card-icon">
          {icon}
        </div>
      </div>

      <h1>{value}</h1>

      <p>{growth}</p>
    </div>
  );
}

export default SummaryCard;