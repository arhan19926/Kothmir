import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "./utils/constants/common.constant";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <RouterProvider router={routes} />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
