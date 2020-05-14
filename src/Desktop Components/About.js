import React from 'react';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    headerTitle: {
        color:'#FFF7EB',
        [theme.breakpoints.down("sm")]: {
            fontSize:'1.3em'
        }
    },
    headerDescription : {
        [theme.breakpoints.down("sm")]: {
            fontSize:'1em'
        },
        color:'#C0B6A5'
    }
}));

const About = () => {
    const classes = useStyles();
    return(
        <>
        <Typography variant={"h5"} noWrap = 'true' className={classes.headerTitle}>
            About Me
        </Typography>
        <Typography variant={"h6"} className={classes.headerDescription}>
            <br/>
            Currently a recent grad with a B.S for Computer Science at the University of Wisconsin-Madison.
            As a emerging entry level developer, I am interested in different technologies and how they can be used in the advancement of several industries.
            My primary interests are full stack web technologies. I'm hoping to challenge myself with new and pragmatic technologies used and adapted in industry.
            <br/>
            <br/>
            I am searching for a full-time software development position that will start in the summer of 2020.
        </Typography>
            </>
    )
};

export default About;
