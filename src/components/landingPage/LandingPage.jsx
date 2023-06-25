import { Box } from "@mui/material";
import { useContext } from "react";
import Dashboard from "./Dashboard";
import LoginDialog from "../accounts/loginDialog";
import { AccountContext } from "../accounts/context/AccountProvider";

const LandingPage = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <Box>
        {account ? (
          <>
            <Dashboard />
          </>
        ) : (
          <>
            <LoginDialog />
          </>
        )}
      </Box>
    </>
  );
};

export default LandingPage;
