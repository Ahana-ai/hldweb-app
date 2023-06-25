import { Box, Grid } from "@mui/material";
import bgImg from "../../images/bg-img.jpg";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "./context/AccountProvider";

const LoginDialog = ({ setItems }) => {
  const { account, setAccount } = useContext(AccountContext);

  const onLoginSuccess = (res) => {
    const decoded = jwt_decode(res.credential);
    console.log(decoded);
    setAccount(decoded);
    // setItems((previous) => {
    //     if( account !== null ) return decoded
    //     else return [...previous]
    // });
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={6} xs={6}>
          <img src={bgImg} style={{ height: "100vh", width: "100%" }} />
        </Grid>
        <Grid item md={6} xs={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            mt={{
              md: 35,
              xs: 20,
            }}
          >
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
            ;
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginDialog;
