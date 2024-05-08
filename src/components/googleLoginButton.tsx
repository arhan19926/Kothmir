import { useNavigate } from "react-router-dom";
import { STATUS_CODES } from "../utils/constants/status-codes.constant";
import { BACKEND_ENDPOINT } from "../utils/constants/common.constant";
import { useState } from "react";

const GoogleLoginButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const apiData = await fetch(BACKEND_ENDPOINT);
      const result = await apiData.json();

      if (result.statusCode === STATUS_CODES.OK && result.data) {
        // window.open(result.data, "_blank");
        window.location.href = result.data;
      } else {
        console.error("Invalid response from Backend");
      }
    } catch (error) {
      console.log(`error--->`, error);
      console.error("Google login error:", error);
    }
  };

  return (
    <button
      className="loginButton"
      onClick={() => !isLoading && handleGoogleLogin()}
    >
      {isLoading ? "Loading..." : "Login with Google"}
    </button>
  );
};

export default GoogleLoginButton;
