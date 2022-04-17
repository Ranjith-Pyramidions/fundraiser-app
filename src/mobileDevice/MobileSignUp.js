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

import img from "../../src/mobile/sign in/signup img.png";
import Logo from "../../src/logo.png";
import { typography } from "@material-ui/system";
import google from "../mobile/sign in/Image 15.png";
import fb from "../mobile/sign in/Mask Group 7.png";
import TextField from "@material-ui/core/TextField";

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {useAuth} from '../AuhContexts'

import{

  auth,
  FaceBookSiginIn,
  registerWithEmailAndPassword,
  signInWithGoogle,
  signInWithFace
} from "../firebase"


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
    marginLeft:"6%"

  },
  googleisgn: {
    padding:"4%",
    backgroundColor: "white",
    height:12,
    width:"95%",
    textTransform:"capitalize"
  },
  logo: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",

  },

  textfield: {
    width: "90%",
    marginRight:"0%",
    

  },
  textfield1: {
    width: "90%",
    marginRight:"0%",
    borderColor: "#1AB37B",

  },
  signinbutton: {
    width: "90%",
    marginLeft:"0%",
    backgroundColor: "#1AB37B",
    color: "white",
    marginTop:"9%",
    textTransform:"capitalize",
    
  },
  fields: {
    textAlign: "left",
    paddingTop: "3%",
    paddingBottom: "2%",
    marginLeft:"6%",

  },
  fieldsforgot:{
    marginRight:"53%",

  },
  fieldor: {
    color: "#AFAFAF",
    paddingTop: 18,
    marginRight:0
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
    paddingBottom:"6%",
    
  },
  endfield1: {
    color: "#1AB37B",
    textTransform:"capitalize",
    font: "normal normal medium 38px/46px Proxima Nova"
  },

  root:{
boxShadow:" 0px 5px 30px #00000026",
background: "#FFFFFF 0% 0% no-repeat padding-box",
borderRadius: "12px",
opacity: 1,
top: "10",
left: "10%",
width: "10",
height: "100%",
paddingLeft:0,


},
  card:{
    left: "5%",
    width: "90%",
    position: "absolute",
    marginTop: "58%",
    borderRadius: "20%",
    paddingBottom:122,
    height: 785,

  },
  root3:{
    paddingBottom:0,
    
  },
  fieldsfname: {
    marginLeft: "2%",
    width:"99%"
  },
 name:{
      marginLeft:"0%",
  },
  fields1:{
    marginLeft: "2%",
    width:"50%"
  },
  fields2:{
    marginLeft:"3%",
    width:"50%"
  }

}));




  // const [expanded, setExpanded] = React.useState(false);





  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };


    
  // useEffect(() => {
    // if (loading) return;
    // if (user) history.replace("/");
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

  
  
  function SignUpPage() {
    const classes = useStyles();
    // const [expanded, setExpanded] = React.useState(false);
    let history = useHistory();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [user] = useAuthState(auth);
    const [error,setError] =useState('')
    const [loading,setLoading] =useState(false)


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
    const register = () => {
      if (!fname) alert("Please enter name")
      if(password!==ConfirmPassword)
        alert("Check Both Password Fields")
        registerWithEmailAndPassword(fname,lname, email, password);
     };

    return (
      <div className={classes.root3}>
            <Grid container spacing={0}>
            <card width="100%" className={classes.logo}>
                <img src={img} alt="signupimg" width="100%" />
                </card>
                <card className={classes.card}>
                  <CardContent  className={classes.root}>
                    <ListItemText className={classes.sign}>
                      <h2>Sign Up </h2>
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

                  <Typography className={classes.fields}>First Name</Typography>
                  <ListItem>
                  <TextField
                      id="outlined-secondary"
                      label="John"
                      variant="outlined"
                      color="secondary"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      className={classes.fields1}
                    />
                    <TextField 
                      id="outlined-secondary"
                      label="Doe"
                      variant="outlined"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      className={classes.fields2}
                    />
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
                    <Typography className={classes.fields}>Create Password</Typography>
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
 
                      <Button
                        className={classes.signinbutton}
                        variant="contained"
                        onClick={register}
                      >
                       Sign Up
                      </Button>
                      <Typography className={classes.endfield}>
                      Already have an account?
                        <Button
                          className={classes.endfield1}
                          onClick={() => {
                            history.push("/SignInPage");
                          }}
                        >
                           Sign In
                        </Button>
                      </Typography>
                      </CardContent>
                </card>
            </Grid>
      </div>
    );
  }
export default SignUpPage;