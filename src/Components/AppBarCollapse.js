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

const AppBarCollapse = props => (
    <div className={props.classes.root}>
        <ButtonAppBarCollapse>
            <MenuItem>About Me</MenuItem>
            <MenuItem>Resume/Experiences</MenuItem>
            <MenuItem>Contact Me</MenuItem>
        </ButtonAppBarCollapse>
        <div className={props.classes.buttonBar} id="appbar-collapse">
            <Button color="inherit">About Me</Button>
            <Button color="inherit">Resume/Experiences</Button>
            <Button color="inherit">Contact Me</Button>
        </div>
    </div>
);

export default withStyles(styles)(AppBarCollapse);
