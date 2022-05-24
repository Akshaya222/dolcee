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
import NotificationsIcon from "@mui/icons-material/Notifications";
import { makeStyles } from "@mui/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const Menu = () => {
  return (
    <Box style={{ width: "100%", height: "100%", padding: "2rem" }}>
      <Typography
        variant="p"
        style={{
          fontWeight: "bold",
          fontSize: "21px",
        }}
      >
        Try Out
      </Typography>
      <Box className="menu-container" style={{ marginTop: "2.5rem" }}>
        <Box
          style={{
            height: "250px",
            borderRadius: "10px",
            position: "relative",
            background:
              "transparent url('proddes.png') 0% 0% no-repeat padding-box",
            backgroundSize: "cover",
          }}
        >
          <Typography className="dolcee-type-box-beta" variant="body2">
            BETA
          </Typography>
          <Box style={{ position: "absolute", bottom: "10px" }}>
            <Typography className="dolcee-type-box-title" variant="h4">
              Product Description
            </Typography>
            <Typography className="dolcee-type-box-desc">
              Generate premium quality natural description from your product
              name and keywords
            </Typography>
          </Box>
        </Box>
        <Box
          style={{
            height: "250px",
            borderRadius: "10px",
            position: "relative",
            background:
              "transparent url('virtualmodel.png') 0% 0% no-repeat padding-box",
            backgroundSize: "cover",
          }}
        >
          <Typography
            className="dolcee-type-box-beta"
            variant="body2"
            style={{ background: "#DAB9FC 0% 0% no-repeat padding-box" }}
          >
            COMING SOON
          </Typography>
          <Box style={{ position: "absolute", bottom: "10px" }}>
            <Typography className="dolcee-type-box-title" variant="h4">
              Virtual Model
            </Typography>
            <Typography className="dolcee-type-box-desc">
              Generate premium quality natural description from your product
              name and keywords
            </Typography>
          </Box>
        </Box>
        <Box
          style={{
            height: "250px",
            borderRadius: "10px",
            position: "relative",
            background:
              "transparent url('imageedi.png') 0% 0% no-repeat padding-box",
            backgroundSize: "cover",
          }}
        >
          <Typography
            className="dolcee-type-box-beta"
            variant="body2"
            style={{ background: "#DAB9FC 0% 0% no-repeat padding-box" }}
          >
            COMING SOON
          </Typography>
          <Box style={{ position: "absolute", bottom: "10px" }}>
            <Typography className="dolcee-type-box-title" variant="h4">
              Image Editing
            </Typography>
            <Typography className="dolcee-type-box-desc">
              Generate premium quality natural description from your product
              name and keywords
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Menu;
