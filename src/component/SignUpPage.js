import {React,useRef} from "react";
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

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {useAuth} from '../AuhContexts'

import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from "@material-ui/core/useMediaQuery";

import { useTheme } from "@material-ui/core/styles";
import MobileSignUp from "../mobileDevice/MobileSignUp"

import{

  auth,
  FaceBookSiginIn,
  registerWithEmailAndPassword,
  signInWithGoogle,
  signInWithFace
} from "../firebase"

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    WebkitAlignContent: "left",

    ///z/]",
  },
  root1: {
    padding: "1%",
  },
  img: {
    marginTop:-40,
    paddingRight: 55,
    opacity: "0.9",
  },
  sign: {
    marginTop: "1%",
    marginBottom: "-4%",
    paddingRight: "78%",
    fontStyle: "bold",
  },
  googleisgn: {
    backgroundColor: "white",
    marginBlock:"0%",
    marginTop:"10%",
    marginBottom:"0%",
    marginInline:"0%",
    textTransform:"capitalize",
    width:"52%"
  },
  logo: {
    paddingLeft: 0,
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
    marginTop: "1%",
  },
  fields: {
    textAlign: "left",
    paddingTop: "2%",
    paddingBottom: "3%",
  },
  fieldor: {
    color: "#AFAFAF",
    paddingTop: "3%",
  },
  gglbuttons: {
    paddingLeft: 0,
 
    
  },
  container2: {
    paddingLeft: "5%",
  },
  endfield: {
    textAlign: "left",
    paddingTop: "2%",
    paddingBottom: "2%",
    paddingLeft: "21%",
  },
  endfield1: {
    color: "#1AB37B",
  },
  fieldsfname: {
    paddingRight: "21%",
    marginLeft: "-3%",
    marginTop:"0%",
    width:"100%"
  },
  fieldslname:{
    marginLeft:"11%",
    width:"100%"
  },
  sign: {
    paddingRight:"85%"
  },
}));

function SignUpPage() {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  let history = useHistory();
  const theme=useTheme();
  const Ismobileview = useMediaQuery(theme.breakpoints.down("sm"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [user] = useAuthState(auth);
  const [error,setError] =useState('')
  const [loading,setLoading] =useState(false)




  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const register = () => {
    if (!fname) alert("Please enter name")
    if(password!==ConfirmPassword)
      alert("Check Both Password Fields")
      registerWithEmailAndPassword(fname,lname, email, password);
   }


    
  // useEffect(() => {
  //   if (loading) return;
  //   if (user) history.replace("/");
  // }, [user, loading]);

  // async function handleSubmit(e){
  //   e.preventDefault()

    // if(passwordRef.current.value!==passwordConfirmRef.current.value)
    // {
    //   return setError('Password do not match please check')
    // }
  //   try{
  //     setError('')
  //     setLoading(true)
  //     await SignUpPage(emailRef.current.value, passwordRef.current.value)
  //   }catch{
  //     setError('Failed to create an account')
  //   }
  //   setLoading(false)

  // }

  return (
    <div className={classes.root}>
            {!Ismobileview&&(
        <>
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
                <ListItemText className={classes.sign}> <h2>Sign Up </h2></ListItemText>
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
                <ListItem>
                  <div className={classes.fieldsfname}>
                    <Typography>First Name</Typography>
                    <TextField
                      id="outlined-secondary"
                      label="John"
                      variant="outlined"
                      color="secondary"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </div>
                  <div className={classes.fieldslname}>
                    <Typography>Last Name</Typography>
                    <TextField 
                      id="outlined-secondary"
                      label="Doe"
                      variant="outlined"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>
                </ListItem>
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
                <Typography className={classes.fields}>
                  Confirm Password
                </Typography>
                <TextField
                  className={classes.textfield1}
                  id="outlined-secondary"
                  label="Re-enter yourPassword"
                  variant="outlined"
                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}        
                />
                <div className={classes.fields}>
                  <Button className={classes.signinbutton} variant="contained"
                 onClick={register}>
                    Sign Up
                  </Button>
                  <Typography className={classes.endfield}>
                    Already have an account?
                    <Button
                      className={classes.endfield1}
                      onClick={() => {
                        history.push("/SignInPage");
                      } }
                      
                    >
                      Sign In
                    </Button>
                  </Typography>
                </div>
              </List>
              </Grid>
          </Grid>
        </div>
      </>
      )}
      {Ismobileview&&<MobileSignUp/>}
    </div>
  );
}

export default SignUpPage;
