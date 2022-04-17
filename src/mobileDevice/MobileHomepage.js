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
import TextField from '@material-ui/core/TextField';

import Logo from "../mobile/list/logo.png";
import Banner from "../../src/mobile/list/img.png";
import crd1 from "../mobile/list/1.png";
import crd2 from "../mobile/list/2.png";
import crd3 from "../mobile/list/3.png";
import crd4 from "../mobile/list/4.png";
import crd5 from "../mobile/list/5.png";
import crd6 from "../mobile/list/6.png";
import crd7 from "../mobile/list/7.png";
import crd8 from "../mobile/list/8.png";
import crd9 from "../mobile/list/9.png";
import shrfl from "../mobile/list/share-fill.png";
import Bxsmap from "../mobile/list/bxs-map.png";
import Calendar from "../mobile/list/calendar.png";
import Profile from "../mobile/list/profile.png";
import Time from "../mobile/list/timelapse.png";
import Heart from "../mobile/list/heart.png";
import { useHistory } from "react-router";
import { grid } from "@material-ui/system";

import { auth, db, logout } from "../firebase";

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
    height: 32,
  },
  buttons2: {
    backgroundColor: "#1AB37B",
    color: "white",
    height: 42,
    width: "90%",
    marginTop: "-30%",
  },
  classGrid: {
    padding: "4%",
    marginTop: "-6%",
  },
  media: {
    height: 0,
    paddingTop: "55%", // 16:9
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
    marginTop: "2%",
  },
  padding01: {
    paddingLeft: "30%",
    marginTop: "4%",
  },
  search: {
    height: "5%",
    width: "80%",
  },

  cardbuttonoutlined: {
    width: "90%",
    borderRadius: "10",
    borderColor: "#1AB37B",
    borderWidth: 1.5,
    opacity: 5,
    textTransform: "capitalize",
    color: "#1AB37B",
  },

  card: {
    paddingBottom: "10%",
    borderRadius: "3%",
  },
  font: {
    fontSize: 1,
    WebkitTextFillColor: "#1AB37B",
  },
  rightbar: {
    textTransform: "capitalize",
    marginLeft: "13%",
  },
}));

const BorderLinearProgress = withStyles((theme) => ({
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1AB37B",
  },
  image: {
    margin: 2,
  },
  root: {
    height: 10,
    borderRadius: "1%",
  },
}))(LinearProgress);

function Homepage() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState();

  let history = useHistory();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <img src={Logo} alt="logo" width="13px" />
          <Toolbar className={classes.rightbar}>
          <TextField id="filled-search" label="Search" type="search" variant="filled" />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
            <Button
              color="inherit"
              onClick={() => history.push("/SignInPage")}
              style={{ textTransform: "capitalize" }}
            >
              {" "}
              Sign in
            </Button>
          </Toolbar>
        </Toolbar>
      </AppBar>
      <div>
        <img src={Banner} alt="banner" width="100%" />
        <Button className={classes.buttons2}>Start a Fundraiser</Button>
      </div>

      <Container className={classes.classGrid}>
        <Grid container spacing={2}>
          {cards.map((card, image) => (
            <Grid item xs={12} sm={12} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={img[image]}
                  title="dogs"
                ></CardMedia>

                <CardActions style={{ marginTop: "-8%", marginLeft: "84%" }}>
                  <Fab
                    size="small"
                    color="white"
                    aria-label="share"
                    className={classes.ShareIcon}
                  >
                    <ShareIcon style={{ color: green[500] }} />
                  </Fab>
                </CardActions>
                <CardContent classname={classes.cardContent}>
                  <List className={classes.padding0}>
                    <ListItem className={classes.padding0}>
                      <img src={Bxsmap} alt="bxs-map" width="18px" />
                      &ensp;
                      <ListItemText
                        className={classes.font}
                        primary={
                          <Typography variant="overline">CHENNAI</Typography>
                        }
                      />
                      <img src={Calendar} alt="bxs-map" width="18px" />
                      &ensp;
                      <ListItemText
                        className={classes.font}
                        primary={
                          <Typography variant="overline">23/08/2021</Typography>
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
                        <b>Feed Stray Dogs amid covid pandamic lockdown</b>
                      </Typography>
                    </ListItem>
                  </List>
                  <List className={classes.padding0}>
                    <ListItemAvatar>
                      <ListItem className={classes.padding0}>
                        <img src={Profile} alt="" width="18px" />
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
                          <Typography variant="subtitle2" color="secondary">
                            Goal:₹50,000
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                  <List className={classes.padding0}>
                    <ListItem className={classes.padding01}>
                      <img src={Time} alt="time" width="18px" />
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Homepage;
export { AppBar, Toolbar };
