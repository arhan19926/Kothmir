const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
      window.location.href = "http://localhost:4000/authentication";
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return <button onClick={handleGoogleLogin}>Login with Google</button>;
};

export default GoogleLoginButton;
