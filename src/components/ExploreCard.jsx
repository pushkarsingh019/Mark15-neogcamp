import { useNavigate } from "react-router-dom";

function ExploreCard({ image, text, redirect }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(redirect)} className="explore-card">
      <img src={image} alt={text} />
      <br />
      <h3>{text}</h3>
    </div>
  );
}

export default ExploreCard;
