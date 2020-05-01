import React from 'react';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    headerTitle: {
        color:'#FFF7EB',
        [theme.breakpoints.down("sm")]: {
            fontSize:'1.5em'
        }
    },
}));

const Resume = () => {
    const classes = useStyles();
    return(
        <>
            <Typography variant={"h5"} noWrap = 'true' className={classes.headerTitle}>
                Resume
            </Typography>
            <br/>
            <Button variant="contained" color="primary">

                Download Resume
            </Button>
        </>
    )
};

export default Resume;
