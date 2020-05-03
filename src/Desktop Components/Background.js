import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import introImage from '../Images/mountain.jpeg';


const useStyles = makeStyles((theme) => ({
    backgroundDiv: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        margin:'auto',
        display:'block',
        maxWidth:'100%',
        height: '100vh', //97vh
        width:'200vw', //200vh
        position:'absolute',
        zIndex:'-1',
        minWidth:'200vw',
        minHeight:'100vh',
        [theme.breakpoints.down("xs")]: {

        },
    }
}));

const Background = () => {
    const classes = useStyles();
    return(
        <>
            <img className={classes.backgroundDiv} src={introImage} alt={'UWMadison'}/>
            </>
    )
};

export default Background;
