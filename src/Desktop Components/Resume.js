import React from 'react';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    headerTitle: {
        color:'#FFF7EB',
        [theme.breakpoints.down("sm")]: {
            fontSize:'1.3em'
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
            <Button href={'https://drive.google.com/file/d/1kC1ftso1FGl-2oJa7NIhpP9wNnqKr91b/view?usp=sharing'} variant="contained" color="primary">
                Download Resume
            </Button>
        </>
    )
};

export default Resume;
