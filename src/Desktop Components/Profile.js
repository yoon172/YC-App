import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import profileImage from '../Images/ProfilePicture4.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '21em',
        borderRadius: '50%',
        [theme.breakpoints.down("sm")]: {
            transform:'scale(0.7,0.7)'
        },
    },
    nameIntro: {
        [theme.breakpoints.down("sm")]: {
            fontSize:'2em',
            marginTop:'0.4em',
        },
        marginTop:'2em',
        color:'white',
    },
    universityIntro: {
        [theme.breakpoints.down("sm")]: {
            fontSize:'1em'
        },
        color:'white',
        paddingTop:'1em'
    },
    degreeIntro: {
        [theme.breakpoints.down("sm")]: {
            fontSize:'1em'
        },
        paddingTop:'1em',
        color:'white'
    }
}));

export default function MediaCard() {
    const classes = useStyles();

    return (
    <>
        <img className={classes.root} src={profileImage} alt={'UWMadison'}/>
        <div>
        <Typography variant={"h4"} className={classes.nameIntro}>
            Yoon Cho
        </Typography>
        <Typography variant={"h6"} className={classes.universityIntro}>
            University of Wisconsin-Madison<br/>
        </Typography>
            <Typography variant={"subtitle1"} className={classes.degreeIntro}>
                B.S Computer Science '20
            </Typography>
        </div>
            </>
    );
}
