import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { GoogleLogin } from "react-google-login";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CancelIcon from "@mui/icons-material/Cancel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
const ProductDesc = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    email:
      "Take your fashion game a notch up with this set of white printed kurta with sharara by Shaily.Pair it with matching juttis and earrings to complete the look. ",
    editMode: false,
    mouseOver: false,
  });
  const handleChange = (event) => {
    setState({ ...state, email: event.target.value });
  };
  const handleClick = () => {
    setState({
      ...state,
      editMode: true,
    });
  };
  return (
    <Box style={{ width: "100%", height: "100%", padding: "12px  1rem" }}>
      <Paper
        elevation={3}
        style={{ width: "97%", height: "100%", borderRadius: "15px" }}
      >
        <div
          style={{
            height: "12%",
            background: "black",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "white",
              fontWeight: "bold",
              marginLeft: "3rem",
            }}
          >
            Product Description
          </p>
          <CancelIcon
            style={{ marginLeft: "auto", color: "#fff", marginRight: "15px" }}
          />
        </div>
        <Box>
          <Grid
            container
            style={{ padding: "1.5rem 2.5rem", height: "88%" }}
            spacing={5}
          >
            <Grid item xs={12} lg={4}>
              <Box display="flex" flexDirection="column">
                <Box display="flex" flexDirection="column">
                  <p className="prod-desc--title">Vertical</p>
                  <p className="prod-desc--label">
                    Choose your product category
                  </p>
                  <FormControl size="small">
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                      labelId="category-select"
                      id="category"
                      label="Category"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box display="flex" flexDirection="column">
                  <p className="prod-desc--title">Product Title</p>
                  <p className="prod-desc--label">Choose your product title</p>
                  <FormControl size="small">
                    <InputLabel id="category-label">Title</InputLabel>
                    <Select labelId="title-select" id="title" label="Title">
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box display="flex" flexDirection="column">
                  <p className="prod-desc--title">keywords</p>
                  <p className="prod-desc--label">Add keywords</p>
                  <FormControl size="small">
                    <InputLabel id="category-label">Title</InputLabel>
                    <Select labelId="title-select" id="title" label="Title">
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Button
                  variant="contained"
                  style={{
                    marginTop: "15px",
                    background: "#7D59FC 0% 0% no-repeat padding-box",
                    borderRadius: "4px",
                  }}
                >
                  Generate
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <Typography variant="body2">
                    Recommended Extensions
                  </Typography>
                </Box>
                <Box
                  style={{
                    minWidth: "350px",
                    padding: "30px",
                    background: "#F2F2F2 0% 0% no-repeat padding-box",
                    borderRadius: "22px",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginBottom: "10px",
                    }}
                  >
                    <Box>
                      <EditIcon
                        onClick={handleClick}
                        style={{ marginRight: "8px" }}
                      />
                      <ContentCopyIcon />
                    </Box>
                  </Box>
                  <Box>
                    <TextareaAutosize
                      name="email"
                      defaultValue={state.email}
                      margin="normal"
                      variant="standard"
                      error={state.email === ""}
                      onChange={handleChange}
                      disabled={!state.editMode}
                      className={classes.textField}
                      style={{
                        fontSize: "13px",
                        border: "0px",
                        background: "transparent",
                      }}
                      InputProps={{
                        disableUnderline: true,
                        classes: {
                          disabled: classes.disabled,
                        },
                      }}
                    />
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Box>
                      <DoneAllIcon
                        onClick={() => {
                          setState({ ...state, editMode: false });
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProductDesc;
