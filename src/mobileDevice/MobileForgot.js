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
import img from "../../src/mobile/sign in/signup img.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import cancel from "../mobile/sign in/Group 79.png";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  root1: {
    paddingLeft: 122,
  },
  img: {
    marginTop: -32,
    paddingRight: 55,
    opacity: "0.9",
  },
  sign: {
    marginTop: "5%",
    textAlign: "left",
    fontStyle: "bold",
    marginLeft: "6%",
  },
  googleisgn: {
    padding: "4%",
    backgroundColor: "white",
    height: 12,
    width: "95%",
  },
  logo: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
  },

  textfield: {
    width: "90%",
    marginRight: "0%",
  },
  textfield1: {
    width: "90%",
    marginRight: "0%",
    marginTop: "3%",
    borderColor: "#1AB37B",
  },
  signinbutton: {
    width: "90%",
    marginLeft: "0%",
    backgroundColor: "#1AB37B",
    color: "white",
    marginTop: "4%",
    textTransform: "capitalize",
  },
  fields: {
    textAlign: "left",
    paddingTop: "0%",
    paddingBottom: "2%",
    marginLeft: "6%",
  },
  fieldsforgot: {
    marginRight: "53%",
  },

  container2: {
    marginTop: 5,
    width: "100%",
  },
  endfield: {
    marginTop: "19%",
    paddingBottom: "0%",
  },
  endfield1: {
    color: "#1AB37B",
    textTransform: "capitalize",
  },

  root: {
    boxShadow: " 0px 5px 30px #00000026",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "12px",
    opacity: 1,
    top: "10",
    left: "10%",
    width: "10",
    height: "100%",
    paddingLeft: 0,
  },
  card: {
    left: "5%",
    width: "90%",
    position: "absolute",
    marginTop: "55%",
    borderRadius: "20%",
    paddingBottom: "100%",
    height: "129%",
  },
  root3: {
    paddingBottom: 0,
  },
  dialog: {
    left: "0%",
    width: "91%",
    height: "26%",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 55px 30px #00000026",
    borderRadius: "40%",
    opacity: "1",
    textAlign: "center",
    color: "#404040",
    opacity: "1",
    margin: "58%",
    marginLeft: "4%",
  },
  dialog1: {
    font: "normal normal bold 15px/28px Proxima Nova",
  },
  dialog1: {
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

  useEffect(() => {
    if (loading) return;
    // if (user) history.replace("/SignInPage");
  }, [user, loading]);

  const sendPasswordResetEmail1 = () => {
    sendPasswordResetEmail(email, OnSucces);
  };

  const OnSucces = () => {
    setOpen(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const sendPasswordResetEmail1 = () => {
  //   sendPasswordResetEmail(email);
  // };
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root3}>
      <Grid container spacing={0}>
        <card width="100%" className={classes.logo}>
          <img src={img} alt="forgot Password" width="100%" />
        </card>
        <card className={classes.card}>
          <CardContent className={classes.root}>
            <ListItemText className={classes.sign}>
              <h3>Forgot Password</h3>
            </ListItemText>
            <Typography className={classes.fields}>
              <h5>Enter your email address to send reset link</h5>
            </Typography>
            <Typography className={classes.fields}>Email</Typography>
            <TextField
              className={classes.textfield1}
              id="outlined-secondary"
              label="example@yopmail.com"
              variant="outlined"
              color="secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography className={classes.endfield}>
              Didn't receive link?
              <Button
                className={classes.endfield1}
                onClick={sendPasswordResetEmail1}
              >
                Resend
              </Button>
              <Button
                className={classes.signinbutton}
                variant="contained"
                onClick={sendPasswordResetEmail1}
              >
                Send Reset Link
              </Button>
            </Typography>
          </CardContent>

          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="Check your email"
            className={classes.dialog}
          >
            <DialogActions>
              <Button className={classes.dialog4} onClick={handleClose}>
                <img
                  src={cancel}
                  alt="cancelimage"
                  style={{ width: "31%", marginLeft: "63%" }}
                />
              </Button>
            </DialogActions>
            <Typography
              style={{ width: "100%", marginTop: -9 }}
            >
              <h4>Check your email</h4>
            </Typography>

            <Typography
              className={classes.dialog1}
              style={{ width: "100%", marginTop: -42 }}
            >
              <h6>
                {" "}
                Please check your email, it will contain <br /> instructions
                about how to reset your password
              </h6>
            </Typography>
          </Dialog>

          {/* <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Check your email</h2>
                <p id="transition-modal-description">
                  Please check your email,it will contain instructions about
                  <br /> how to reset your password
                </p>
              </div>
            </Fade>
          </Modal> */}
        </card>
      </Grid>
    </div>
  );
}

export default ForgotPasswordPage;
