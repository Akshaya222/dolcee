import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  return (
    <Box className="container">
      <Grid container spacing={2} style={{ height: "103vh" }}>
        <Grid
          item
          xs={12}
          lg={6}
          style={{ background: "black", height: "100%" }}
        >
          <Box
            style={{
              height: "20%",
              padding: "10px 1.5rem",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                className="dolcee-icon-color"
                style={{ background: "white" }}
              >
                <Box
                  className="dolcee-icon-inner"
                  style={{ background: "black" }}
                ></Box>
              </Box>
              <Typography
                variant="subtitle"
                style={{ color: "white", marginLeft: "10px" }}
              >
                DOLCEE AI
              </Typography>
            </Box>
          </Box>
          <Box
            style={{
              height: "80%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="./image-1.png" height="100%" />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          style={{
            background: "#7D59FC 0% 0% no-repeat padding-box",
            height: "100%",
            paddingLeft: "4rem",
            paddingRight: "4rem",
          }}
        >
          <Box style={{ height: "100%", position: "relative" }}>
            <Box
              style={{
                height: "10%",
                width: "100%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <ul style={{ marginLeft: "auto" }}>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
                <li>
                  <a href="#">Company</a>
                </li>
              </ul>
            </Box>
            <Box
              style={{
                height: "90%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "-2.5rem",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  marginRight: "auto",
                }}
                color="white"
              >
                Automate your content and cataloging.
              </Typography>
              <Box style={{ marginRight: "auto", marginTop: "16px" }}>
                <GoogleLogin
                  type="black"
                  render={(renderProps) => (
                    <button
                      style={{
                        background: "black",
                        height: "100%",
                        width: "100%",
                        border: "none",
                        outline: "none",
                        padding: "0.6rem 1rem",
                        color: "white",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="./image-2.png" height="20px" />
                      <span style={{ marginLeft: "10px", fontSize: "12px" }}>
                        CONTINUE WITH GOOGLE
                      </span>
                    </button>
                  )}
                  clientId="572165430323-q17vhadqud2vf81f3pj6i883775tk0b3.apps.googleusercontent.com"
                  // buttonText="Continue with Google"
                  // onSuccess={responseGoogle}
                  // onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
