import React from 'react';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import GetAppIcon from '@material-ui/icons/GetApp';
const useStyles = makeStyles(theme => ({
    headerTitle: {
        color:'#FFF7EB',
        [theme.breakpoints.down("sm")]: {
            fontSize:'1.3em'
        }
    },
    downloadButton: {
        fontWeight:'bold',
        backgroundColor: '#2F4F4F',
        color: 'white',
        [theme.breakpoints.down("sm")]: {
            fontSize:'0.65em'
        }
    }
}));

const DTResume = () => {
    const classes = useStyles();
    return(
        <>
            <Typography variant={"h5"} className={classes.headerTitle}> {/*noWrap = 'true'*/}
                Resume
            </Typography>
            <br/>
            <Button startIcon={<GetAppIcon />} href={'https://drive.google.com/file/d/1kC1ftso1FGl-2oJa7NIhpP9wNnqKr91b/view?usp=sharing'}
                    className={classes.downloadButton} variant="contained">
                Download Resume
            </Button>
        </>
    )
};

export default DTResume;
