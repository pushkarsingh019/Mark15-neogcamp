import { useNavigate } from "react-router-dom";

function Button({ variant, text, redirect }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(redirect)} className={variant}>
      {text}
    </button>
  );
}

export default Button;
