import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {BrowserRouter as Router, Link, useHistory, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    contrastText: '#fff',
  },
  margin: {
    marginRight: theme.spacing(1)
  },
  underscoreLink: {
    textDecoration: 'none',
    boxShadow: "none",
    color: 'white'
  },
  titleButton : {
    color: '#FFFFFF', 
    textTransform: 'none', 
    textAlign: 'left', 
    backgroundColor: 'transparent',
    flexGrow: 1,
  }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    let history = useHistory();

    function handleHomeClick() {
        history.push("/");
    }

    function handleClick() {
        history.push("/hremployeemodel");
    }

    function handleContactClick() {
        history.push("/contact")
    }

    return (
    <div className={classes.root}>
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Button onClick={handleHomeClick}  disableRipple="True" size="large" className={classes.titleButton}> 
                        <Typography variant="h6" className={classes.titleButton}>
                            Andrew Sai
                        </Typography>
                    </Button>
                    <Button onClick={handleClick} variant="contained" color="Primary" size="large" className={classes.margin}> 
                        Employee Model
                    </Button>
                    <Button href="https://github.com/Andrew-Sai" variant="contained" color="Primary" size="large" className={classes.margin}> 
                        Github
                    </Button>
                    <Button onClick={handleContactClick} variant="contained" color="Primary" size="large" className={classes.margin}>
                        Contact
                    </Button>                    
                </Toolbar>
            </AppBar>
        </Router>
    </div>
  );
}
