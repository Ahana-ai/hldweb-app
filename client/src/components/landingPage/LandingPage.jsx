import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import LoginDialog from "../accounts/loginDialog";
import { AccountContext } from "../accounts/context/AccountProvider";

const LandingPage = () => {
  const { account } = useContext(AccountContext);

  //   UseState to store the account details in local storage using vanilla js
  const getItem = () => {
    let list = localStorage.getItem("Accounts");
    if (list) {
      return JSON.parse(list);
    } else return [];
  };
  const [items, setItems] = useState(getItem());

  useEffect(() => {
    localStorage.setItem("Accounts", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Box>
        {account ? (
          <>
            <Dashboard items={items} />
          </>
        ) : (
          <>
            <LoginDialog setItems={setItems} />
          </>
        )}
      </Box>
    </>
  );
};

export default LandingPage;
