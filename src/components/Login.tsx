import GoogleLoginButton from "./googleLoginButton";
import "./css/login.css";
const Login = () => {
  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <h2>Welcome!</h2>
        <p>Please Login to access KOTHMIR</p>
        <GoogleLoginButton />
      </div>
      <div className="rightContainer"></div>
    </div>
  );
};

export default Login;
