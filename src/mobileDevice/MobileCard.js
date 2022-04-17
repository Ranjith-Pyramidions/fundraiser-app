import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  CardActions,
  Typography,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Rectangle from "../mobile/detail/img.png";
import Heart from "../mobile/detail/heart.png";
import Share from "../mobile/detail/share-fill.png";
import Shares from "../mobile/detail/shares.png";
import Profile from "../mobile/detail/profile.png";
import Bxsmap from "../mobile/detail/bxs-map.png";
import Calendar from "../mobile/detail/calendar.png";
import Raised from "../mobile/detail/raised.png";
import Goal from "../mobile/detail/goal.png";
import Time from "../mobile/detail/timelapse.png";
import Support from "../mobile/detail/supporters.png";
import Supportersprofile from "../mobile/detail/supporters profile.png";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MobileHomepage from "../mobileDevice/MobileHomepage"
import {AppBar,Toolbar} from "./MobileHomepage.js"
import { useHistory } from "react-router";
import Logo from "../mobile/list/logo.png";
import SearchBar from "material-ui-search-bar";


const useStyles = makeStyles((theme) => ({
  font: {
    color: "#1AB37B",
    fontSize: "1px",
  },
  fontcolor: {
    textTransform: "capitalize",
    color: "#1AB37B",
  },
  padding0: {
    padding: "0px",
    marginTop:"-2%",

  },
  padding: {
    marginRight: "20%",
  },
  paddingTime: {
    marginLeft: "30%",
  },
  padding1: {
    padding: "40px",
  },
  padding2: {
    padding: "2%",
    marginTop:"4%",
  },
  justifyCenter: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
  },
  leftStyle: {
    position: "absolute",
    bottom: "4px",
    backgroundColor: "#5E5E5E",
    width: "100%",
    opacity: "0.8",
    height: 77,
    paddingTop: 14,
  },
  buttondonateshare:{
  },
  rightStyle: {
    position: "absolute",
    bottom: "0px",
    width: "100%",
    right: "0",
    padding: "10px",
    marginBottom: -106,
    height: "95px",
    opacity: "0.6",
    paddingRight: 130,
  },
  overviewcardbuttoncontained: {
    backgroundColor: "#1AB37B",
    color: "white",
    width: "89%",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#1AB37B",
    },
  },
  overviewcardbuttonoutlined: {
    backgroundColor: "#fff",
    color: "#1AB37B",
    borderColor: "#1AB37B",
    width: "89%",
    textTransform: "capitalize",
    "&:hover": {
      borderColor: "#1AB37B",
    },
  },
  cardGrid: {
    padding: "20px",
    paddingTop: 83,
  },
  progress: {
    "&:after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundImage:
        "linear-gradient( 296deg, rgba(255, 255, 255, .2) 25%,  transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent )",
      zIndex: 1,
      backgroundSize: "20px 30px",
    },
    tabs: {
      marginRight: "20px",
    },
    listButtons:{
      width:"70%"
    }
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
    colorAdjust: "textsecondary",
  },
}))(LinearProgress);

function CardDetail() {
  const classes = useStyles();
  const theme = useTheme();
  const Ismobileview = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState();
  let history=useHistory() 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.top}>

<div>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <img src={Logo} alt="logo" width="93px"/>
            <Toolbar className={classes.rightbar}>

              <SearchBar className={classes.search}
               style={{textTransform:"capitalize",marginLeft:"26%"}}
                value={value}
                onChange={(value) => this.setState({ value: setValue })}
                // onRequestSearch={() => doSomethingWith(this.state.value)}
              />

            <Button color="inherit" onClick={()=>history.push("/SignInPage")}
            style={{textTransform:"capitalize",marginRight:"-12%"}}> Sign in</Button>
            </Toolbar>
          </Toolbar>
        </AppBar>
      </div>


      <div style={{ position: "relative", width: "100%" }}>
        <img src={Rectangle} className={classes.image} alt="rectangle" />
        <div className={classes.leftStyle}>
          <Typography
            variant="h6"
            style={{ color: "white", marginLeft: 12, textAlign: "justify" }}
          >
            Helping Stray Dogs for better food and <br /> Shelter during Covid
            lockdown
          </Typography>

        </div>

        <div className={classes.rightStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <List className={classes.padding0} style={{ marginLeft: "38%" }}>
              <ListItem>
                <img src={Bxsmap} alt="bxs-map" width="19" />
                &ensp;
                <ListItemText
                  className={classes.font}
                  primary={<Typography variant="overline">CHENNAI</Typography>}
                />
                &emsp; &emsp; &emsp; &emsp; &emsp;
                <img src={Calendar} alt="bxs-map" width="19" />
                &ensp;
                <ListItemText
                  className={classes.font}
                  primary={
                    <Typography variant="overline">23/08/2021</Typography>
                  }
                />
              </ListItem>
            </List>
          </div>

          <div className={classes.justifyCenter}>
            <List className={classes.padding0} style={{ marginLeft: "37%" }}>
              <ListItemAvatar>
                <ListItem>
                  <img src={Profile} alt="" width="29" />
                  &emsp;
                  <ListItemText
                    primary={
                      <Typography variant="inherit" style={{ color: "Black",fontSize:"14px" }}>
                        by Chennai Stray Care
                      </Typography>
                    }
                  />
                </ListItem>
              </ListItemAvatar>
            </List>
          </div>
        </div>
      </div>
      <main>
        <Container maxWidth="lg" className={classes.cardGrid}>
          <Grid item lg={4} sm={12} md={6}>
            <Card className={classes.padding2}>
              <List>
                <BorderLinearProgress
                  variant="determinate"
                  className={classes.progress}
                  value={44}
                />
              </List>
              <List className={classes.padding0}>
                <ListItem>
                  <img src={Raised} alt="rectangle" width="10%" />
                  &emsp;
                  <ListItemText
                    primary={
                      <Typography variant="inherit">
                        Raised:
                        <br />
                        <b> ₹25,000</b>
                      </Typography>
                    }
                  />
                  <img src={Goal} alt="rectangle" width="10%" />
                  &emsp;
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2" color="secondary" start>
                        Goal:
                        <br />
                        <b>₹50,000</b>
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
              <hr />
              <List className={classes.listButtons}>
                <ListItem>
                  <Button
                    style={{ width: "100%" }}
                    className={classes.overviewcardbuttoncontained}
                    size="medium"
                    variant="outlined"
                    endIcon={<img src={Heart} alt="heart" width="18px" />}
                  >
                    Donate Now
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    style={{ width: "100%" }}
                    className={classes.overviewcardbuttonoutlined}
                    size="medium"
                    variant="outlined"
                    endIcon={<img src={Share} alt="heart" width="18px" />}
                  >
                    Share
                  </Button>
                </ListItem>
              </List>

              <ListItem className={classes.paddingTime}>
                <img src={Time} alt="time" width="22px" />
                &emsp;
                <ListItemText secondary="6 days left" />
              </ListItem>
            </Card>
            <br />
              <Grid lg={8} sm={12} md={6}>
                <Card className={classes.padding2}>
                  <Paper square>
                    <Tabs
                      value={value}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={handleChange}
                      aria-label="disabled tabs example"
                    >
                      <Tab label="Overview" />
                      <Tab label="Updates" />
                      <Tab label="Comments" />
                    </Tabs>
                  </Paper>
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      style={{ textAlign: "justify" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis
                      iste natus error sit voluptatem accusantium doloremque
                      laudantium, totam rem aperiam, eaque ipsa quae ab illo
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                      sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      style={{ textAlign: "justify" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis
                      iste natus error sit voluptatem accusantium doloremque
                      laudantium, totam rem aperiam, eaque ipsa quae ab illo
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                      sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </Typography>
                  </CardContent>
                  <List >
               
                      <Button
                        className={classes.overviewcardbuttoncontained}
                        variant="contained"
                        endIcon={<img src={Heart} alt="heart" width="18px" />}
                      >
                        Donate Now
                      </Button>
                      <br/>
                      <br/>
                      <Button
                        variant="outlined"
                        className={classes.overviewcardbuttonoutlined}
                        endIcon={<img src={Share} alt="heart" width="18px" />}
                      >
                        Share
                      </Button>
                  </List>
                </Card>
              </Grid>
            </Grid>{" "}
            &emsp;&emsp;
            <Grid>
              <Card className={classes.padding2}>
                <List className={classes.padding0}>
                  <ListItem>
                    <img src={Support} alt="rectangle" width="10%" />
                    &emsp;
                    <ListItemText
                      primary={
                        <Typography variant="inherit">
                          <b> 925</b> Supporters
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
                <hr />
                <List className={classes.padding0}>
                  <ListItem>
                    <img src={Shares} alt="heart" width="10%" />
                    &emsp;
                    <ListItemText
                      primary={
                        <Typography variant="inherit">
                          <b>2,162</b> Shares
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
                <hr />
                <List className={classes.padding0}>
                  <ListItem>
                    <img src={Shares} alt="heart" width="10%" />
                    &emsp;
                    <ListItemText
                      primary={
                        <Typography variant="inherit">
                          <b>₹19,400</b> Raised by sharing
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Card>
            </Grid>
            <br />
            <Card className={classes.padding2}>
              <List className={classes.padding0}>
                <ListItem >
                  <ListItemText
                    primary={
                      <Typography variant="h6">Top Supporters:</Typography>
                    }
                  />
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        start
                      >
                        See all
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
              <List className={classes.padding0}>
                <ListItem>
                  <img src={Supportersprofile} alt="heart" width="10%" />
                  &emsp;
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2" color="textPrimary" start>
                        John Doe
                      </Typography>
                    }
                  />{" "}
                  &emsp;&emsp;
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        className={classes.fontcolor}
                      >
                        <b>₹4,000</b>
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
              <hr />
              <List className={classes.padding0}>
                <ListItem >
                  <img src={Supportersprofile} alt="heart" width="10%" />
                  &emsp;
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2" color="textPrimary" start>
                        John Doe
                      </Typography>
                    }
                  />{" "}
                  &emsp;&emsp;
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        className={classes.fontcolor}
                      >
                        <b>₹2,700</b>
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
              <hr />
              <List className={classes.padding0}>
                <ListItem>
                  <img src={Supportersprofile} alt="heart" width="10%" />
                  &emsp;
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2" color="textPrimary">
                        John Doe
                      </Typography>
                    }
                  />{" "}
                  &emsp;&emsp;
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        className={classes.fontcolor}
                      >
                       <b> ₹2,400</b>
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
              <hr />
              <List className={classes.padding0}>
                <ListItem>
                  <img src={Supportersprofile} alt="heart" width="10%" />
                  &emsp;
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2" color="textPrimary" start>
                        John Doe
                      </Typography>
                    }
                  />{" "}
                  &emsp;&emsp;
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        className={classes.fontcolor}
                      >
                        <b>₹1,800</b>
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
              <hr />
              <List className={classes.padding0}>
                <ListItem>
                  <img src={Supportersprofile} alt="heart" width="10%" />
                  &emsp;
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2" color="textPrimary" start>
                        John Doe
                      </Typography>
                    }
                  />
                  &emsp;&emsp;
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        className={classes.fontcolor}
                      >
                        <b>₹1,500</b>
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Card>
        </Container>
      </main>
    </div>
  );
}
export default CardDetail;
