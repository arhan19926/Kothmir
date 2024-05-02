
import GoogleLoginButton from "./googleLoginButton";
import "./css/login.css";
const Login = () => {
  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <div className="logoContainer">
          <img className="loginPageImage" src="/kothmir_login.png"></img>
          <h2>Kothmir</h2>
        </div>
        <GoogleLoginButton />
      </div>
      <div className="rightContainer"></div>
    </div>
  );
};

export default Login;
