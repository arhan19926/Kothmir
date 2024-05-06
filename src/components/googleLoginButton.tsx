import { useNavigate } from "react-router-dom";
import { STATUS_CODES } from "../utils/constants/status-codes.constant";
import { BACKEND_ENDPOINT } from "../utils/constants/common.constant";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const apiData = await fetch(BACKEND_ENDPOINT);
      const result = await apiData.json();

      if (result.statusCode === STATUS_CODES.OK) {
        window.location.href = result.data;
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(`error--->`, error);
      console.error("Google login error:", error);
    }
  };

  return (
    <button className="loginButton" onClick={() => handleGoogleLogin()}>
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
