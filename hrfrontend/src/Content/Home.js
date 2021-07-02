import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        minWidth: 345,
        height: '100%',
        
    },
    root2: {
      //width: '100%',
      height: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop:'30'
    },
    paper: {
        marginTop: theme.spacing(6),
    },
    underscoreLink: {
        textDecoration: 'none',
        boxShadow: "none",
        color: "black",
    },
}));



export default function Home() {
    const classes = useStyles();

    return (
        <div>
            < NavbarTemplate />
            <Container maxWidth="xl">
                <div className={classes.paper}>
                    <Grid container spacing={3}  direction="row" justify="center"  alignItems="stretch">
                        <Grid item>
                        <Card className={classes.root}>
                                <CardActionArea>
                                    <a href="https://github.com/Andrew-Sai" className={classes.underscoreLink}>
                                        <CardMedia
                                        className={classes.media}
                                        image='/GitHub-logo.png'
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Github
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                This is my personal Github with a few repositories:
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            - AndrewSaiProjects is the repository that is being deployed for this Website
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            - HREmployee is the repository that contains my modelling for the HR Employee
                                            </Typography>
                                        </CardContent>
                                    </a>
                                </CardActionArea>                 
                            </Card>
                        </Grid>

                        <Grid item>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <Link to="/hremployeemodel" className={classes.underscoreLink}>
                                        <CardMedia
                                        className={classes.media}
                                        image="employee-meeting.jpg"
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Will my employee leave or not?
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Employee model
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <Link to="/resume" className={classes.underscoreLink}>
                                    <CardMedia
                                    className={classes.media}
                                    image="resume.jpg"
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Resume
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            My Resume
                                        </Typography>
                                    </CardContent>
                                    </Link>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
  );
}