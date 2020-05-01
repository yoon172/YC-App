import React, {useEffect} from 'react';
import TopBar from "./Components/TopBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Profile from "./Components/Profile";
import Background from "./Components/Background";
import About from "./Components/About";
import FadeIn from 'react-fade-in';
import Typography from "@material-ui/core/Typography";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    introProfile: {
        textAlign:'center',
        justifyContent:'center',
        width:'100%',
        [theme.breakpoints.down("xl")]: {
            paddingTop:'10em',
        },
        [theme.breakpoints.down("lg")]: {
            paddingTop:'7em',
        },
        [theme.breakpoints.down("sm")]: {
            paddingTop:'6em',
        },
        [theme.breakpoints.down("xs")]: {
            paddingTop:'4em',
        }
    },
    gridContainerStyle: {
        height: '100vh',
    },
    aboutMeContainer: {
        backgroundColor: '#343536',
        height:'40vh',
    },
    aboutMeBio: {
        color:'white',
        padding:'5%',
    },
    contactMeContainer: {
        backgroundColor: '#343536',
        height:'30vh',
        color:'white',
        [theme.breakpoints.down("lg")]: {
            height:'40vh',
        },
        [theme.breakpoints.down("md")]: {
            height:'45vh',
        },
        [theme.breakpoints.down("sm")]: {
            height:'65vh',
        },
    },
    contactMe: {
        paddingLeft:'1em',
        padding:'5%',
        paddingTop:'1%',
        marginTop: '10%',
/*        [theme.breakpoints.down("lg")]: {
            marginTop:'3em'
        },
        [theme.breakpoints.down("md")]: {
            marginTop:'3em'
        },
        [theme.breakpoints.down("sm")]: {
            marginTop:'-3em'
        },
        [theme.breakpoints.down("xs")]: {
            marginTop:'8em'
        },*/
    },
    downloadResume: {
        padding:'5%',
        paddingTop:'1%',
        [theme.breakpoints.down("lg")]: {
            marginTop:'3em'
        },
        [theme.breakpoints.down("md")]: {
            marginTop:'3em'
        },
        [theme.breakpoints.down("sm")]: {
            marginTop:'-3em'
        },
/*        [theme.breakpoints.down("xs")]: {
            marginTop:'8em'
        },*/
    }
}));




const Main = () => {
    const classes = useStyles();

    return (

        <div className="App">
            <TopBar/>

            <Grid container direction={"column"} className={classes.gridContainerStyle}>
                <Grid >
                    <Background /> {/*Background Picture*/}
                </Grid>
                <FadeIn>
                <div className={classes.introProfile}>
                    <Profile /> {/*Profile headshot photo and Name typography*/}
                </div>
                </FadeIn>
            </Grid>
            <Grid container alignItems={"center"} justify={"flex-start"} direction={'column'} className={classes.aboutMeContainer}>
                <Grid className={classes.aboutMeBio} item xs={12} sm={11} md={9} lg={7}>
                    <About/> {/*About Me Description Section*/}
                </Grid>
            </Grid>

            <Grid container alignItems={"baseline"} justify={"center"} direction={'row'} className={classes.contactMeContainer}>
                <Grid className={classes.contactMe} item xs={6} sm={5} md={4} lg={3}>
                    <Contact/> {/*Contact information*/}
                </Grid>
                <Grid className={classes.downloadResume} item xs={6} sm={5} md={4} lg={3}>
                    <Resume/>
                </Grid>
            </Grid>

        </div>

    );
};

export default Main;
