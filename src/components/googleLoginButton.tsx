import { useNavigate } from "react-router-dom";
import { STATUS_CODES } from "../utils/constants/status-codes.constant";

import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { BACKEND_ROUTES } from "../utils/constants/common.constant";

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async (credential: string) => {
    try {
      const response = await axios.post(
        BACKEND_ROUTES.AUTHENTICATION.LOGIN,
        { accessToken: credential },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.statusCode === STATUS_CODES.OK) {
        navigate("/home");
      } else {
        console.error("Invalid response from Backend");
      }
    } catch (error) {
      console.log(`error--->`, error);
      console.error("Google login error:", error);
    }
  };

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        const token = credentialResponse.credential as string;
        handleGoogleLogin(token);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLoginButton;
