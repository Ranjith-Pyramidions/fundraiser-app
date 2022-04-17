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
import MenuIcon from "@material-ui/icons/Menu";
import SearchBar from "material-ui-search-bar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import LinearProgress from "@material-ui/core/LinearProgress";
import { green } from "@material-ui/core/colors";
import RoomIcon from "@material-ui/icons/Room";
import DateRangeIcon from "@material-ui/icons/DateRange";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Link } from "react-router-dom";
import MobileHomePage from "../mobileDevice/MobileHomepage";

import Logo from "../../src/logo.png";
import Banner from "../../src/banner image list.png";
import crd1 from "../web/list page/1.png";
import crd2 from "../web/list page/2.png";
import crd3 from "../web/list page/3.png";
import crd4 from "../web/list page/4.png";
import crd5 from "../web/list page/5.png";
import crd6 from "../web/list page/6.png";
import crd7 from "../web/list page/7.png";
import crd8 from "../web/list page/8.png";
import crd9 from "../web/list page/9.png";
import shrfl from "../web/list page/share-fill.png";
import Bxsmap from "../web/list page/bxs-map.png";
import Calendar from "../web/list page/calendar.png";
import Profile from "../web/list page/profile.png";
import Time from "../web/detail page/timelapse.png";
import Heart from "../web/list page/heart.png";
import { useHistory } from "react-router";
import { grid } from "@material-ui/system";

import { auth, db, logout } from "../firebase";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from "@material-ui/core/useMediaQuery";

import { useTheme } from "@material-ui/core/styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const img = [crd1, crd2, crd3, crd4, crd5, crd6, crd7, crd8, crd9];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexdirection: "row",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttons: {
    backgroundColor: "#1AB37B",
    color: "white",
  },
  classGrid: {
    margin:"3%",
    marginTop: "2%",
  },
  media: {
    paddingTop: "49%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  shrfl: {
    display: "flex",

    margin: theme.spacing(1),
  },
  time: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  padding0: {
    padding: 0,
  },
  search: {
    width: "10%",
    height: "57%",
  },

  cardbuttonoutlined: {
    width: "92%",
    borderColor: "#1AB37B",
    borderWidth: 1.5,
    opacity: 5,
  },

  card: {
    paddingBottom: "7%",
    
  },
  font: {
    fontSize: 1,
    WebkitTextFillColor: "#1AB37B",
  },
}));

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1AB37B",
  },
}))(LinearProgress);

function Homepage() {
  const theme = useTheme();
  const Ismobileview = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState();

  let history = useHistory();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {!Ismobileview && (
        <>
          <div className={classes.root}>
            <AppBar position="static" color="inherit">
              <Toolbar>
                <img src={Logo} alt="logo" />
                <Typography variant="h6" className={classes.title}></Typography>
                &ensp;
                <SearchBar
                  className={classes.search}
                  value={value}
                  onChange={(value) => this.setState({ value: setValue })}
                />
                &ensp;&ensp;
                <div className={classes.buttons}>
                  <Button className={classes.buttons}>
                    Start a Fundraiser
                  </Button>
                </div>
                <Button
                  color="inherit"
                  onClick={() => history.push("/SignInPage")}
                  style={{  }}
                >
                  {" "}
                  Sign in
                </Button>
              </Toolbar>
            </AppBar>
          </div>
          <div>
            <img src={Banner} alt="banner" width="100%" />
          </div>
          <Card maxWidth="md" className={classes.classGrid}>
            <Grid container spacing={8}>
              {cards.map((card, image) => (
                <Grid item lg={4} md={6}>
                  <Card>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.media}
                        image={img[image]}
                        title="dogs"
                      />

                      <CardActions
                        style={{ marginTop: "-5%", marginLeft: "44%" }}
                      >
                        <Fab
                          size="small"
                          color="white"
                          aria-label="share"
                          qclassName={classes.margin}
                        >
                          <ShareIcon style={{ color: green[500] }} />
                        </Fab>
                      </CardActions>
                      <CardContent classname={classes.cardContent}>
                        <List className={classes.padding0}>
                          <ListItem className={classes.padding0}>
                            <img src={Bxsmap} alt="bxs-map" />
                            &ensp;
                            <ListItemText
                              className={classes.font}
                              primary={
                                <Typography variant="overline">
                                  CHENNAI
                                </Typography>
                              }
                            />
                            <img src={Calendar} alt="bxs-map" />
                            &ensp;
                            <ListItemText
                              className={classes.font}
                              primary={
                                <Typography variant="overline">
                                  23/08/2021
                                </Typography>
                              }
                            />
                          </ListItem>
                        </List>
                        <List className={classes.padding0}>
                          <ListItem
                            className={classes.padding0}
                            color="textsecondary"
                          >
                            <Typography variant="h6">
                              <b>
                                Feed Stray Dogs amid covid pandamic lockdown
                              </b>
                            </Typography>
                          </ListItem>
                        </List>
                        <List className={classes.padding0}>
                          <ListItemAvatar>
                            <ListItem className={classes.padding0}>
                              <img src={Profile} alt="" />
                              &emsp;
                              <ListItemText
                                primary={
                                  <Typography variant="inherit">
                                    by chennai stray care
                                  </Typography>
                                }
                              />
                            </ListItem>
                          </ListItemAvatar>
                        </List>
                        <List>
                          <BorderLinearProgress
                            // className={classes.progress}
                            variant="determinate"
                            value={44}
                          />
                        </List>
                        <List className={classes.padding0}>
                          <ListItem className={classes.padding0}>
                            <ListItemText
                              primary={
                                <Typography variant="inherit">
                                  Raised:₹25,000
                                </Typography>
                              }
                            />
                            <ListItemText
                              primary={
                                <Typography
                                  variant="subtitle2"
                                  color="secondary"
                                >
                                  Goal:₹50,000
                                </Typography>
                              }
                            />
                          </ListItem>
                        </List>
                        <List className={classes.padding0}>
                          <ListItem className={classes.padding01}>
                            <img src={Time} alt="time" />
                            &emsp;
                            <ListItemText secondary="6 days left" />
                          </ListItem>
                        </List>
                      </CardContent>
                      <Button
                        className={classes.cardbuttonoutlined}
                        size="medium"
                        variant="outlined"
                        endIcon={<img src={Heart} alt="heart" width="18px" />}
                        onClick={() => {
                          history.push("/CardDetail");
                        }}
                      >
                        Donate Now
                      </Button>
                    </Card>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Card>
        </>
      )}
      {Ismobileview && <MobileHomePage />}
    </div>
  );
}

export default Homepage;
export { AppBar };
