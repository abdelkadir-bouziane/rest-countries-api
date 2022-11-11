import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function BackBtn() {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <BsArrowLeft className="back-button-icon" />
      <span>Back</span>
    </button>
  );
}

export default BackBtn;
