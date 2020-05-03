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
        color:'#C0B6A5',
        [theme.breakpoints.down("sm")]: {
            fontSize:'1.0em'
        }
    }
}));

const Contact = () => {
    const classes = useStyles();
    return(
        <>
            <Typography variant={"h5"} wrap className={classes.headerTitle}>
                Contact Information
            </Typography>
            <Typography variant={"h6"} className={classes.headerDescription}>
                <br/>
                Yoon Cho
                <br/>
                625 Mendota CT
                <br/>
                53703 Madison, Wisconsin
                <br/>
                yoon172@gmail.com
                <br/>
                (+1) 608-800-7597
            </Typography>
        </>
    )
};

export default Contact;
