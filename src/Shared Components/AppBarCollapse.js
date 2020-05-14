/**
 * Code from the below medium post, only updated for latest material UI, using a
 * Menu for the popup and with breakpoints that work.
 *
 * https://medium.com/@habibmahbub/create-appbar-material-ui-responsive-like-bootstrap-1a65e8286d6f
 */
import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";

const styles = theme => ({
    root: {
        position: "absolute",
        right: 0,
        backgroundColor:'#2F4F4F',
        color:"white"
    },
    buttonBar: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        margin: "10px",
        paddingLeft: "16px",
        paddingRight:"5px",
        right: 0,
        position: "relative",
        width: "100%",
        background: "transparent"
    }
});

//handleMenuClick

const AppBarCollapse = props => (
    <div className={props.classes.root}>
        <ButtonAppBarCollapse>
            <MenuItem onClick={event =>  window.open('https://github.com/yoon172', '_blank')}  >Github</MenuItem>
            <MenuItem onClick={event =>  window.open('https://www.linkedin.com/in/yoon172/', '_blank')} target="_blank" >LinkedIn</MenuItem>
            <MenuItem onClick={event =>  window.open("mailto:yoon172@gmail.com")}  >Contact Me</MenuItem>
        </ButtonAppBarCollapse>
        <div className={props.classes.buttonBar} id="appbar-collapse">
            <Button href={'https://github.com/yoon172'} target="_blank" color="inherit">Github</Button>
            <Button href={'https://www.linkedin.com/in/yoon172/'} target="_blank" color="inherit">LinkedIn</Button>
            <Button href={"mailto:yoon172@gmail.com"} color="inherit">Contact Me</Button>
        </div>
    </div>
);

export default withStyles(styles)(AppBarCollapse);
