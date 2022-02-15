import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

function Snack({ snack }) {
  return (
    <div className="Snack">
      <img src={snack.image} alt={snack.name} />
      <Link to={`/snacks/${snack.id}`}>
        <h4>{snack.name}</h4>
        <HeartHealth snackHealth={snack.is_healthy} />
      </Link>
    </div>
  );
}

export default Snack;
