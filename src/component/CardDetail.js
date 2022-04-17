import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  AppBar,
  Toolbar,
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
  import Rectangle from "../web/detail page/Rectangle 24.png";
  import Heart from "../web/detail page/heart.png";
  import Share from "../web/detail page/share-fill.png";
  import Shares from "../web/detail page/shares.png";
  import Profile from "../web/detail page/Group 9.png";
  import Bxsmap from "../web/detail page/bxs-map.png";
  import Calendar from "../web/detail page/calendar.png";
  import Raised from "../web/detail page/raised.png";
  import Goal from "../web/detail page/goal.png";
  import Time from "../web/detail page/timelapse.png";
  import Support from "../web/detail page/supporters.png";
  import Supportersprofile from "../web/detail page/supporters profile.png";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MobileCard from "../mobileDevice/MobileCard"
import { useHistory } from "react-router";
import Logo from "../mobile/list/logo.png";
import SearchBar from "material-ui-search-bar";
import { Backdrop } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  font: {
    color: "#1AB37B",
    fontSize: "1%",
  },
  fontcolor: {
    textTransform: "capitalize",
    color: "#1AB37B",
  },
  padding0: {
    padding: "0%",
  },
  padding: {
    padding: "2%",
  },
  padding1: {
    padding: "3%",
  },
  padding2: {
    padding: "3%",
  },
  justifyCenter: {
    display: "flex",
    justifyContent: "center",
    textAlign: "justify"

  },
  image: {
    width: "100%",
  },
  leftStyle: {
    position: "absolute",
    bottom: "0.1%",
    marginBottom: "0%",
    width: "56%",
    padding: "2%",
    opacity: "1",
    marginRight:"0.1%",
    

    "&:before": {
      content: '""',
      position: "absolute",
      top: "0%",
      left: "0%",
      borderTop: "198px solid ",
      
      // filter: "blur(1px)",
      borderRight:"111.70px solid transparent",
      borderTop:"148px solid #13325BAD",

      borderColor:"115px solid #13325BAD",
      width:"95%",
      opacity: "1",
      height: "59%",
      padding: "0%",
    },
  },

  rightStyle: {
    position: "absolute",
    bottom: "0%",
    width: "30%",
    right: "0",
    padding: "1.5%",
    marginBottom: "0.4%",
    height: "26%",
    opacity: "1",
    background:"#13325BAD",
    // background: "transparent linear-gradient(180deg, #1B3E6B40 0%, #13325BAD 0%, #03142BE0 100%) 0% 0% no-repeat padding-box",
    

    
    "&:before": {
      content: '""',
      position: "absolute",
      top: "0%",
      right: "100%",
      borderTop: "181px solid  ",
      // filter: "blur(1px)",
      borderRight: "136px solid #13325BAD",
      borderColor:" rgba(0, 0, 0, 0)",
      width:"0%",
      opacity: "1",
      paddingTop:0,

    },
  },
  overviewcardbuttoncontained: {
    backgroundColor: "#1AB37B",
    color: "white",
    width: "45%",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#1AB37B",
    },
  },
  overviewcardbuttonoutlined: {
    backgroundColor: "#fff",
    color: "#1AB37B",
    borderColor: "#1AB37B",
    width: "45%",
    textTransform: "capitalize",
    "&:hover": {
      borderColor: "#1AB37B",
    },
  },
  cardGrid: {
    padding: "4%"
    },
  progress: {
    "&:after": {
      content: '""',
      position: "absolute",
      top: "0%",
      left: "0%",
      bottom: "0%",
      right: "0%",
      backgroundImage:
        "linear-gradient( 296deg, rgba(255, 255, 255, .2) 25%,  transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent )",
      zIndex: 1,
      backgroundSize: "20px 30px",
    },
  },
  buttons: {
    backgroundColor: "#1AB37B",
    color: "white",
    borderRadius:"5px"
  },
  search: {
    width: "11%",
    height: "39px",
    marginLeft: "50%",
    textTransform:"capitalize"
  },
  // top:{
  //   display:'flex',
  //   flexdirection: 'row'
  // },

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
      {!Ismobileview && (
        <>
          <div style={{ position: "relative", width: "100%" }}>
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
                  <Button className={classes.buttons}
                   style={{textTransform:"inherit" }}                                    >
                    Start a Fundraiser
                  </Button>
                </div>
                <Button
                  color="inherit"
                  onClick={() => history.push("/SignInPage")}
                  style={{ marginLeft: "1%",textTransform:"capitalize" }}
                >
                  {" "}
                  Sign in
                </Button>
              </Toolbar>
            </AppBar>
          </div>
            <div>
              <img src={Rectangle} className={classes.image} alt="rectangle" />
              <div className={classes.leftStyle}>
                <div>
                  <List>
                  <Typography variant="h4" style={{ color: "white" }}>
                    Helping Stray Dogs for better food and <br /> Shelter during
                    Covid lockdown
                  </Typography>
                  </List>

                </div>
              </div>
            </div>

            <div className={classes.rightStyle}>
              <div className={classes.justifyCenter}>
                <List className={classes.padding0}>
                  <ListItemAvatar>
                    <ListItem>
                      <img src={Profile} alt="" />
                      &emsp;
                      <ListItemText
                        primary={
                          <Typography
                            variant="inherit"
                            style={{ color: "white" }}
                          >
                            by Chennai Stray Care
                          </Typography>
                        }
                      />
                    </ListItem>
                  </ListItemAvatar>
                </List>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <List className={classes.padding0}>
                  <ListItem>
                    <img src={Bxsmap} alt="bxs-map" />
                    &ensp;
                    <ListItemText
                      className={classes.font}
                      primary={
                        <Typography variant="overline">CHENNAI</Typography>
                      }
                    />
                    &emsp;
                    <img src={Calendar} alt="bxs-map" />
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
            </div>
          </div>
          <main>
            <Container maxWidth="lg" className={classes.cardGrid}>
              <Grid container spacing={3}>
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
                    <CardContent >
                      <Typography variant="subtitle1" color="textSecondary" className={classes.justifyCenter}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt.
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" className={classes.justifyCenter}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt.
                      </Typography>
                    </CardContent>
                    <CardActions style={{ width: "100%" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <Button
                          className={classes.overviewcardbuttoncontained}
                          variant="contained"
                          endIcon={<img src={Heart} alt="heart" width="18px" />}
                        >
                          Donate Now
                        </Button>
                        <Button
                          variant="outlined"
                          className={classes.overviewcardbuttonoutlined}
                          endIcon={<img src={Share} alt="heart" width="18px" />}
                        >
                          Share
                        </Button>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
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
                      <ListItem >
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
                            <Typography
                              variant="subtitle2"
                              color="secondary"
                              start
                            >
                              Goal:
                              <br />
                              <b>₹50,000</b>
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                    <hr />
                    <List>
                      <Button
                        style={{ width: "100%" }}
                        className={classes.overviewcardbuttoncontained}
                        size="medium"
                        variant="outlined"
                        endIcon={<img src={Heart} alt="heart" width="18px" />}
                      >
                        Donate Now
                      </Button>
                    </List>
                    <List>
                      <Button
                        style={{ width: "100%" }}
                        className={classes.overviewcardbuttonoutlined}
                        size="medium"
                        variant="outlined"
                        endIcon={<img src={Share} alt="heart" width="18px" />}
                      >
                        Share
                      </Button>
                    </List>
                    <List className={classes.padding}>
                      <ListItem
                        className={classes.padding}
                        justifyContent="center"
                      >
                        <img src={Time} alt="time" />
                        &emsp;
                        <ListItemText secondary="6 days left" />
                      </ListItem>
                    </List>
                  </Card>
                  <br />
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
                  <br />
                  <Card className={classes.padding2}>
                    <List className={classes.padding0}>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Typography variant="h6">
                              Top Supporters:
                            </Typography>
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
                    <List >
                      <ListItem>
                        <img src={Supportersprofile} alt="heart" width="10%" />
                        &emsp;
                        <ListItemText
                          primary={
                            <Typography
                              variant="subtitle2"
                              color="textPrimary"
                              start
                            >
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
                              ₹4,000
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
                            <Typography
                              variant="subtitle2"
                              color="textPrimary"
                              start
                            >
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
                              ₹2,700
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
                              ₹2,400
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
                            <Typography
                              variant="subtitle2"
                              color="textPrimary"
                              start
                            >
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
                              ₹1,800
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
                            <Typography
                              variant="subtitle2"
                              color="textPrimary"
                              start
                            >
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
                              ₹1,500
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </main>
        </>
      )}
      {Ismobileview && <MobileCard />}
    </div>
  );
}
export default CardDetail;
