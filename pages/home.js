import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { GoogleLogin } from "react-google-login";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CancelIcon from "@mui/icons-material/Cancel";
import { makeStyles } from "@mui/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Menu from "../src/Components/Menu";
import ProductDescription from "../src/Components/ProdDesc";
import MenuIcon from "@mui/icons-material/Menu";
import PaymentIcon from "@mui/icons-material/Payment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import CalculateIcon from "@mui/icons-material/Calculate";
import { height } from "@mui/system";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: 50,
  },
  textField: {
    width: 300,
    color: "black",
    fontSize: 30,
    opacity: 1,
    borderBottom: 0,
    "&:before": {
      borderBottom: 0,
    },
  },
  disabled: {
    color: "black",
    borderBottom: 0,
    "&:before": {
      borderBottom: 0,
    },
  },
});

const Home = () => {
  return (
    <Box style={{ height: "100vh", width: "100%" }}>
      <Box
        style={{
          height: "10vh",
          background: "white",
          borderBottom: "1px solid #7070701f",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MenuIcon style={{ marginRight: "10px", height: "20px" }} />
          <Box className="dolcee-icon-color">
            <Box className="dolcee-icon-inner"></Box>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "3rem",
          }}
          className="pricing-box"
        >
          <PaymentIcon />
          <Typography style={{ marginLeft: "10px" }} variant="body2">
            Check pricing
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box className="notification-box">
            <NotificationsIcon style={{ fontSize: "20px", color: "#ffffff" }} />
          </Box>
        </Box>
      </Box>
      <Grid container spacing={2} style={{ height: "90vh" }}>
        <Grid
          item
          xs={12}
          md={5}
          lg={2.8}
          style={{
            background: "white",
            height: "100%",
            borderRight: "1px solid #7070701f",
            borderTop: "1px solid #7070701f",
            position: "relative",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              border: "1px solid #70707033",
              borderRadius: "10px",
              height: "50px",
              margin: "10px",
              padding: "10px 10px",
              justifyContent: "space-between",
            }}
          >
            <FolderIcon style={{ fontSize: "16px", color: "#7D59FC" }} />
            <Typography variant="body1" style={{ fontWeight: "400" }}>
              Select a project
            </Typography>
            <ArrowDropDownIcon style={{ fontSize: "17px", color: "#7D59FC" }} />
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              background: "#F2F2F2",
              border: "1px solid #70707033",
              margin: "10px",
              padding: "5px 9px",
              justifyContent: "space-between",
              marginTop: "3rem",
            }}
          >
            <RocketLaunchIcon
              style={{
                fontSize: "12px",
                color: "rgba(0,0,0,0.8)",
                marginRight: "10px",
              }}
            />
            <Box
              display="flex"
              flexDirection="column"
              style={{ marginRight: "auto" }}
            >
              <span style={{ fontSize: "14px" }}>Try Now</span>
              <span
                style={{
                  fontSize: "10px",
                  color: "rgba(0,0,0,0.7)",
                }}
              >
                Product Description
              </span>
            </Box>
            <MoreVertIcon style={{ fontSize: "17px", color: "black" }} />
          </Box>
          <Box
            style={{
              padding: "13px",
              color: "rgba(0,0,0,0.5)",
              position: "absolute",
              bottom: "10px",
            }}
          >
            <Box display="flex" alignItems="center">
              <LibraryBooksIcon
                style={{ fontSize: "12px", marginRight: "10px" }}
              />
              <Typography variant="caption">Quick Guides</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <SettingsEthernetIcon
                style={{ fontSize: "12px", marginRight: "10px" }}
              />
              <Typography variant="caption">API Docs</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <CalculateIcon
                style={{ fontSize: "12px", marginRight: "10px" }}
              />
              <Typography variant="caption">Pricing Calculator</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          lg={9.2}
          style={{
            background: "#F2F2F2",
            height: "100%",
          }}
        >
          <Menu />
          {/** 2nd section here.... */}
          {/* <ProductDescription /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
