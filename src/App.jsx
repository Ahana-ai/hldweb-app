import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import AccountProvider from "./components/accounts/context/AccountProvider";
import LandingPage from "./components/landingPage/LandingPage";

function App() {
  const clientId =
    "43483080232-hu9t47ej1tcovd0i894afmgdt74qfeid.apps.googleusercontent.com";
  return (
    <>
      {/* <Dashboard /> */}
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <LandingPage />
        </AccountProvider>
      </GoogleOAuthProvider>
      ;
    </>
  );
}

export default App;
