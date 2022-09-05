import { useNavigate } from "react-router-dom";

function BackRouteComponent() {
  const navigate = useNavigate();

  return (
    <span onClick={() => navigate(-1)} className="padding100">
      ← Go Back
    </span>
  );
}

export default BackRouteComponent();
