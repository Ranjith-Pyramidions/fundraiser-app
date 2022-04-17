import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Button,
  Icon,
} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import flexDirection from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import cancel from "../mobile/sign in/Group 79.png";
import img from "../../src/web/sign in/Group 75.png";
import Logo from "../../src/logo.png";
import detailpagebanner from "../web/detail page/Rectangle 24.png";
import { typography } from "@material-ui/system";
import google from "../web/sign in/Image 15.png";
import fb from "../web/sign in/Mask Group 7.png";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../firebase";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MobileForgot from "../mobileDevice/MobileForgot";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  sign: {
    textAlign: "Left",
    fontStyle: "bold",
    paddingTop: "10%",
    paddingBottom: "5%",
  },

  logo: {
    paddingLeft: "0%",
  },

  textfield: {
    width: "100%",
  },

  signinbutton: {
    width: "100%",
    backgroundColor: "#1AB37B",
    color: "white",
    textTransform: "capitalize",
  },
  fields: {
    textAlign: "left",
    paddingTop: "2%",
    paddingBottom: "3%",
    textTransform: "capitalize",
  },
  fieldor: {
    textAlign: "left",
    paddingBottom: "3%",
  },
  gglbuttons: {
    paddingLeft: 0,
  },
  container2: {
    paddingLeft: "8%",
    paddingRight: "15%",
    marginTop: "5%",
    marginBottom: "0%",
  },
  endfield: {
    paddingTop: "18%",
    paddingBottom: "5%",
    marginLeft: "0%",
    borderRadius: "115px",
  },
  endfield1: {
    color: "#1AB37B",
    textTransform: "capitalize",
    borderRadius: "115px",
  },
  forgotfields: {
    paddingTop: "2%",
    textAlign: "left",
    marginRight: "50%",
    textTransform: "capitalize",
  },
  root1: {
    height: "54%",
    flexGrow: 1,
    minWidth: "50%",
    transform: "translateZ(0)",
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    "@media all and (-ms-high-contrast: none)": {
      display: "none",
    },
  },
}));

function ForgotPasswordPage() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const theme = useTheme();
  const Ismobileview = useMediaQuery(theme.breakpoints.down("sm"));

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // useEffect(() => {
  //   if (loading) return;
  //   if (user) history.replace("/ServerModal");
  // }, [user, loading]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const sendPasswordResetEmail1 = () => {
    sendPasswordResetEmail(email, OnSucces);
  };

  const OnSucces = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {!Ismobileview && (
        <>
          <Card className={classes.img}>
            <div className={classes.root1}>
              <Grid container spacing={3}>
                <Grid item xs={6} md={6} lg={6}>
                  <img src={img} alt="signinimg" width="100%" />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <List className={classes.container2}>
                    <ListItem className={classes.logo}>
                      <img src={Logo} alt="logo" width="30%" />
                    </ListItem>
                    <Typography className={classes.sign}>
                      {" "}
                      Forgot Password{" "}
                    </Typography>

                    <div className={classes.fieldor}>
                      <Typography>
                        Enter your email address to send resend link
                      </Typography>
                    </div>
                    <Typography className={classes.fields}>Email</Typography>
                    <TextField
                      className={classes.textfield}
                      id="outlined-secondary"
                      label="example@yopmail.com"
                      variant="outlined"
                      color="secondary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className={classes.resetlink}>
                      <Typography className={classes.endfield}>
                        Don't receive link?
                        <Button
                          className={classes.endfield1}
                          onClick={() => sendPasswordResetEmail(email)}
                        >
                          Resend
                        </Button>
                      </Typography>

                      <Button
                        className={classes.signinbutton}
                        variant="contained"
                        onClick={sendPasswordResetEmail1}
                      >
                        Send Reset Link
                      </Button>

                      <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="Check your email"
                        className={classes.dialog}
                      >
                        <DialogActions>
                          <Button
                            className={classes.dialog4}
                            onClick={handleClose}
                          >
                            <img
                              src={cancel}
                              alt="cancelimage"
                              style={{ width: "31%", marginRight: "-63%" }}
                            />
                          </Button>
                        </DialogActions>
                        <Typography
                          style={{
                            width: "53%",
                            marginLeft: "37%",
                            marginBottom: "2%",
                          }}
                        >
                          <h2>Check your email{" "}</h2>
                        </Typography>
                        <DialogContentText
                          className={classes.dialog1}
                          style={{
                            width: "73%",
                            marginLeft: "18%",
                            marginBottom: "11%",
                            textAlign:"center"
                          }}
                        >
                          Please check your email, it will contain instructions
                          about how to reset your password
                        </DialogContentText>
                      </Dialog>
                    </div>
                  </List>
                </Grid>
              </Grid>
            </div>
          </Card>
        </>
      )}
      {Ismobileview && <MobileForgot />}
    </div>
  );
}

export default ForgotPasswordPage;
