import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import introImage from '../Images/mountain.jpeg';
import Profile from "./Profile";


const useStyles = makeStyles((theme) => ({
    backgroundDiv: {
        maxWidth:'100%',
        width:'100%',
        zIndex:'-1',
        minHeight:'100vh',
        backgroundImage:`url(${introImage})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%',
        padding:'1em',
        position:'relative',
        textAlign:'center',
    }
}));

const Background = () => {
    const classes = useStyles();
    return(
        <div className={classes.backgroundDiv}>
            <Profile />
        </div>
    )
};

export default Background;
