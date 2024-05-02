import { useNavigate } from "react-router-dom";
import { STATUS_CODES } from "../utils/constants/status-codes.constant";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const apiData = await fetch("http://localhost:4000/authentication");
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

  return <button className="loginButton" onClick={() => handleGoogleLogin()}>Login with Google</button>;
};

export default GoogleLoginButton;
