import { useNavigate } from "react-router-dom";
import { STATUS_CODES } from "../utils/constants/status-codes.constant";
import { BACKEND_ENDPOINT } from "../utils/constants/common.constant";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
const GoogleLoginButton = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async (credential: string) => {
    // setIsLoading(true);
    try {
      const response = await axios.post(
        BACKEND_ENDPOINT,
        { accessToken: credential },
        {
          // withCredentials: true,
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
        console.log(credentialResponse);
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
