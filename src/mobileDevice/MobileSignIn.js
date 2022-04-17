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

import { typography } from "@material-ui/system";
import google from "../mobile/sign in/Image 15.png";
import fb from "../mobile/sign in/Mask Group 7.png";
import TextField from "@material-ui/core/TextField";
import SignUpPage from "./MobileSignUp";
import group104 from "../mobile/sign in/Group 104.png";

import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
  FaceBookSiginIn,
  signInWithFace,
} from "../firebase";

import { useAuthState } from "react-firebase-hooks/auth";
// import {FaceBookSiginIn,signInWithEmail,googleSignin,callback} from "../afirebase"

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
    paddingRight: "64%",
    fontStyle: "bold",
  },
  googleisgn: {
    padding: "4%",
    backgroundColor: "white",
    height: 12,
    width: "95%",
    textTransform: "capitalize"

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
    borderColor: "#1AB37B",
  },
  signinbutton: {
    width: "90%",
    marginLeft: "0%",
    backgroundColor: "#1AB37B",
    color: "white",
    textTransform: "capitalize",
    paddingBottom:"2%"
  },
  fields: {
    textAlign: "left",
    paddingTop: "3%",
    paddingBottom: "2%",
    marginLeft: "6%",
  },

  fieldor: {
    color: "#AFAFAF",
    paddingTop: 18,
    marginRight: 0,
  },
  gglbuttons: {
    marginLeft: "2%",
    
  },
  container2: {
    marginTop: 5,
    width: "100%",
  },
  endfield: {
    paddingTop: "5%",
    paddingBottom: "6%",
  },
  endfield1: {
    color: "#1AB37B",
    textTransform: "capitalize"
  },
  fieldsforgot: {
    paddingTop: "5%",
    paddingBottom: "4%",
    marginRight: "57%",
   textTransform: "capitalize"

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
    marginTop: "58%",
    borderRadius: "20%",
    paddingBottom: "100%",
    height: "75%",
  },
  root3: {
    paddingBottom: 0,
  },
}));

function SignInPage() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  let history = useHistory();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    // if (user) history.replace("/");
  }, [user, loading]);
  const facebooksignin = () => {
    FaceBookSiginIn();
  };

  const signIn = () => {
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className={classes.root3}>
      <Grid container spacing={0}>
        <card width="100%" className={classes.logo}>
          <img src={group104} alt="signinimg" width="100%" />
        </card>
        <card className={classes.card}>
          <CardContent className={classes.root}>
            <ListItemText className={classes.sign}>
              <h2>Sign In </h2>
            </ListItemText>
            <ListItem className={classes.gglbuttons}>
              <Button
                className={classes.googleisgn}
                variant="outlined"
                startIcon={<img src={google} alt="logo" width="13px" />}
                onClick={signInWithGoogle}
              >
                <h6>google</h6>
              </Button>
              &emsp; &emsp;
              <Button
                className={classes.googleisgn}
                variant="outlined"
                startIcon={<img src={fb} alt="fblogo" width="13px" />}
                onClick={signInWithFace}
              >
                <h6> facebook</h6>
              </Button>
            </ListItem>
            <Typography className={classes.fieldor}>or</Typography>
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
            <Typography className={classes.fields}>Password</Typography>
            <TextField
              className={classes.textfield1}
              id="outlined-secondary"
              label="Enter your password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className={classes.fieldsforgot}
              onClick={() => {
                history.push("/ForgotPasswordPage");
              }}
            >
              Forgot Password
            </Button>
            <Button
              className={classes.signinbutton}
              variant="contained"
              onClick={signIn}
            >
              Sign in
            </Button>
            <Typography className={classes.endfield}>
              Don't have an account?
              <Button
                className={classes.endfield1}
                onClick={() => {
                  history.push("/SignUpPage");
                }}
              >
                Sign Up
              </Button>
            </Typography>
          </CardContent>
        </card>
      </Grid>
    </div>
  );
}
export default SignInPage;
