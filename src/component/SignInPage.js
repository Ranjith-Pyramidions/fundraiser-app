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

import img from "../../src/web/sign in/img.png";
import Logo from "../../src/logo.png";
import detailpagebanner from "../web/detail page/Rectangle 24.png";
import { typography } from "@material-ui/system";
import google from "../web/sign in/Image 15.png";
import fb from "../web/sign in/Mask Group 7.png";
import TextField from "@material-ui/core/TextField";
import SignUpPage from "./SignUpPage";
import MobileSignIn from "../mobileDevice/MobileSignIn"

import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from "@material-ui/core/useMediaQuery";

import { useTheme } from "@material-ui/core/styles";

import { auth, signInWithEmailAndPassword
,signInWithGoogle,FaceBookSiginIn,signInWithFace} from "../firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { AddShoppingCartRounded } from "@material-ui/icons";
// import {FaceBookSiginIn,signInWithEmail,googleSignin,callback} from "../afirebase"
import apiCrud from "./apicrud";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingLeft: 665,
    WebkitAlignContent: "left",

  },

  // img: {
  //   margin:"5%",
  //   paddingRight: 55,
  //   opacity: "0.9",
  // },
  root:{
    marginTop:"3%",
    marginBottom:"3%",
    width:"100%",
    height:"100%"

  },
  sign: {
    paddingRight: "85%",
    fontStyle: "bold",
  },
  googleisgn: {
    backgroundColor: "white",
    textTransform:"capitalize"
  },
  logo: {
    paddingLeft: "0%",
  },

  textfield: {
    width: "100%",
  },
  textfield1: {
    width: "100%",
    borderColor: "#1AB37B",
  },
  signinbutton: {
    width: "100%",
    backgroundColor: "#1AB37B",
    color: "white",
    textTransform:"capitalize"
  },
  fields: {
    textAlign: "left",
    paddingTop: 10,
    paddingBottom: 20,
    textTransform:"capitalize"

  },
  fieldor: {
    color: "#AFAFAF",
    paddingTop: "4%",
  },
  gglbuttons: {
    paddingLeft: 0,
    
  },
  container2: {
    paddingLeft: "5%",
    marginBottom: "0%",
  },
  endfield: {
    paddingTop: "5%",
    paddingBottom: "5%",
    marginLeft:"28%"

  },
  endfield1: {
    color: "#1AB37B",
    textTransform:"capitalize"
  },
  forgotfields: {
    paddingTop: "2%",
textAlign:"left",
marginRight:"50%",
textTransform:"capitalize"
  },
}));

function SignInPage() {
  const classes = useStyles();
  const theme=useTheme();
  const Ismobileview = useMediaQuery(theme.breakpoints.down("sm"));
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
    // (user) history.replace("/");
  }, [user, loading]);
const facebooksignin=()=>{
  FaceBookSiginIn()
}

const signIn=()=>{
  signInWithEmailAndPassword (email, password)
}

const sign=async()=>{
  var response=await apiCrud.getData(
  )
   response.then((res)=>{
    console.log("this is data",res)
  })
}

  return (
    <Card className={classes.root}>
      {!Ismobileview&&(
        <>
      <Container className={classes.img}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={6} lg={6}>
              <img src={img} alt="signinimg" width="100%" />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <List className={classes.container2}>
                <ListItem className={classes.logo}>
                  <img src={Logo} alt="logo" width="30%" />
                </ListItem>
                <ListItemText className={classes.sign}> <h2>Sign In </h2></ListItemText>
                <div className={classes.gglbuttons}>
                  <ListItem className={classes.gglbuttons}>
                    <Button
                      className={classes.googleisgn}
                      variant="outlined"
                      startIcon={<img src={google} alt="logo" width="18px" />}
                      onClick={signInWithGoogle}
                    >
                      Sign in with google
                    </Button>
                    &emsp; &emsp;
                    &emsp; &emsp;           &emsp; &emsp;           &emsp;
                    <Button
                      className={classes.googleisgn}
                      variant="outlined"
                      startIcon={<img src={fb} alt="fblogo" width="18px" />}
                      onClick={signInWithFace}
                    >
                      Continue with facebook
                    </Button>
                  </ListItem>
                </div>

                <div className={classes.fieldor}>
                  <Typography>or</Typography>
                </div>
                <Button
                      className={classes.googleisgn}
                      variant="outlined"
                      startIcon={<img src={google} alt="logo" width="18px" />}
                      onClick={sign}
                    >
                      Sign in with google
                    </Button>
                <Typography
                  className={classes.fields}
                >
                  Email
                </Typography>
                <TextField
                  className={classes.textfield}
                  id="outlined-secondary"
                  label="example@yopmail.com"
                  variant="outlined"
                  color="secondary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Typography
                  className={classes.fields}
                >
                  Password
                </Typography>
                <TextField
                  className={classes.textfield1}
                  id="outlined-secondary"
                  label="Enter your password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className={classes.fields}>
                  <Button
                    className={classes.fields}
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
                  </Button  >
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
                </div>
              </List>
              </Grid>
          </Grid>
      </Container></>
      )}
      {Ismobileview&&<MobileSignIn/>}
    </Card>
  );
}
export default SignInPage;
