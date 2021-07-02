import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NavbarTemplate from '../Content/Navbar.js';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PersonIcon from '@material-ui/icons/Person';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: theme.spacing(3)
    },
    formtop: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 3),
    },
  }));

export default function Contact() {
    const classes = useStyles();
    return (
        <div>
            <NavbarTemplate />
            <Container maxWidth="sm">
                <div className={classes.paper}>
                    <Card variant="outlined">
                        <div className={classes.formtop}>
                            < CssBaseline />
                            <Avatar className={classes.avatar}>
                                <PermContactCalendarIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Andrew Sai
                            </Typography>
                            <Container maxWidth="sm">
                                <form className={classes.form}>

                                    <Grid container spacing={2} alignItems="center">
                                        <Grid container item xs>
                                            <Typography>
                                                Email:
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            Andrew.sai7@gmail.com
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2} alignItems="center">
                                        <Grid container item xs>
                                            <Typography>
                                                Phone:
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            0422656958
                                        </Grid>
                                    </Grid>

                                    
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid container item xs>
                                            <Typography>
                                                Github:
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            Github.com/Andrew-Sai
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2} alignItems="center">
                                        <Grid container item xs>
                                            <Typography>
                                                Website:
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            AndrewSai.me
                                        </Grid>
                                    </Grid>

                                </form>
                            </Container>
                        </div>
                    </Card>
                </div>
            </Container>
        </div>
    )
}