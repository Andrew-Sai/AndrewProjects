import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
import axios from "axios"; 
import Modal from '@material-ui/core/Modal'

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
    },
    submit: {
      margin: theme.spacing(3, 0, 3),
    },
  }));

export default function HrForm() {
    const classes = useStyles();
    const[sLevel, setSLevel] = React.useState(0.5);
    const[lastEval, setLastEval] = React.useState(0.5)
    const[avgMthHours, setAvgMthHours] = React.useState(0);
    const[workAccident, setWorkAccident] = React.useState(false);
    const[lastPromo, setlastPromo] = React.useState(false);
    const[noProj, setNoProj] = React.useState(2);
    const[totalTime, setTotalTime] = React.useState(2);
    const[department, setDepartment] = React.useState('sales');
    const[salary, setSalary] = React.useState('low');
    const[responseData, setResponseData] = React.useState('');
    const[open, setOpen] = React.useState(false);


    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://andrewprojects.herokuapp.com/hrformsubmit/', {
            sLevel: sLevel,
            lastEval: lastEval,
            avgMthHours: avgMthHours,
            workAccident: workAccident,
            promo5years: lastPromo,
            target_number_project: noProj,
            target_time_spend_company: totalTime,
            target_Department: department,
            target_salary: salary
        }).then((response) => {
            setResponseData(response.data)
            setOpen(true)
            console.log('Success');
            console.log(responseData)
          }, (error) => {
            console.log(error);
          });
    }
    
    const handleSalaryChange = (event) => {
        setSalary(event.target.value);
    };

    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    };


    const handleTotalTimeChange = (event) => {
        setTotalTime(event.target.value);
    };

    const handleNoProjChange = (event) => {
        setNoProj(event.target.value);
    };

    const handleSLevelSliderChange = (event, newValue) => {
        setSLevel(newValue);
    };
    
    const handleSLevelInputChange = (event) => {
        setSLevel(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handlelastEvalSliderChange = (event, newValue) => {
        setLastEval(newValue);
    };
    
    const handlelastEvalInputChange = (event) => {
        setLastEval(event.target.value === '' ? '' : Number(event.target.value));
    };

    return (
        <Container component="main" maxWidth="sm">
            <div className={classes.paper}>
                <Card variant="outlined">
                    <div className={classes.formtop}>
                        < CssBaseline />
                        <Avatar className={classes.avatar}>
                            <PersonIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Employee Details
                        </Typography>
                        <Container maxWidth="xs">
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid container item xs={12}>
                                        <Grid container item xs>
                                            <Typography>
                                                What was the employee average monthly hours?
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <TextField  
                                                label="Hours" 
                                                variant="standard" 
                                                size="small"
                                                type="Number" 
                                                min="0"
                                                oninput="validity.valid||(value='');"
                                                style={{width:80}}
                                                required value={avgMthHours} 
                                                onChange={
                                                    e => e.target.value < 0
                                                    ? setAvgMthHours(e.target.value = 0)
                                                    :setAvgMthHours(e.target.value)} 
                                            />
                                        </Grid>
                                    </Grid>
                                    
                                    <Grid container item xs={12}>
                                        <Typography id="sLevel" gutterBottom>
                                            What was the employee satisfaction level?
                                        </Typography>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item xs>
                                                <Slider
                                                    value={typeof sLevel === 'number' ? sLevel : 0.5}
                                                    min={0}
                                                    step={0.01}
                                                    max={1}
                                                    onChange={handleSLevelSliderChange}
                                                    aria-labelledby="input-slider"
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Input
                                                    value={sLevel}
                                                    margin="dense"
                                                    onChange={handleSLevelInputChange}
                                                    inputProps={{
                                                    step: 0.01,
                                                    min: 0,
                                                    max: 1,
                                                    type: 'number',
                                                    'aria-labelledby': 'input-slider',
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    
                                    <Grid container item xs={12}>
                                        <Typography id="lastEval" gutterBottom>
                                            What was the last evaluation of the employee?
                                        </Typography>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item xs>
                                                <Slider
                                                    value={typeof lastEval === 'number' ? lastEval : 0.5}
                                                    min={0}
                                                    step={0.01}
                                                    max={1}
                                                    onChange={handlelastEvalSliderChange}
                                                    aria-labelledby="input-slider"
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Input
                                                    value={lastEval}
                                                    margin="dense"
                                                    onChange={handlelastEvalInputChange}
                                                    inputProps={{
                                                    step: 0.01,
                                                    min: 0,
                                                    max: 1,
                                                    type: 'number',
                                                    'aria-labelledby': 'input-slider',
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container item xs={12}>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item xs>
                                                <Typography>
                                                    Did a work accident occurred?
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Checkbox
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                    onChange={() => setWorkAccident(!workAccident)}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container item xs={12}>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item xs>
                                                <Typography>
                                                    Did they recieve a promotion in the past 5 years?
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Checkbox
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                    onChange={() => setlastPromo(!lastPromo)}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container item xs={12}>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item xs>
                                                <Typography>
                                                    What number project were they part of?
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Select labelid="noProjLabel" id="noProj" value={noProj} onChange={handleNoProjChange} autoWidth>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                    <MenuItem value={5}>5</MenuItem>
                                                    <MenuItem value={6}>6</MenuItem>
                                                    <MenuItem value={7}>7</MenuItem>
                                                </Select>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    
                                    <Grid container item xs={12}>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item xs>
                                                <Typography>
                                                    How many years were they part of the company?
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Select labelid="totalYearsLabel" id="totalTime" value={totalTime} onChange={handleTotalTimeChange} autoWidth>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                    <MenuItem value={5}>5</MenuItem>
                                                    <MenuItem value={6}>6+</MenuItem>
                                                </Select>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container item xs={12}>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item xs>
                                                <Typography>
                                                    What Department were they part of?
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Select labelid="departmentLabel" id="department" value={department} onChange={handleDepartmentChange} autoWidth>
                                                    <MenuItem value={"sales"}>Sales</MenuItem>
                                                    <MenuItem value={"accounting"}>Accounting</MenuItem>
                                                    <MenuItem value={"hr"}>HR</MenuItem>
                                                    <MenuItem value={"technical"}>Technical</MenuItem>
                                                    <MenuItem value={"support"}>Support</MenuItem>
                                                    <MenuItem value={"management"}>Management</MenuItem>
                                                    <MenuItem value={"IT"}>IT</MenuItem>
                                                    <MenuItem value={"product_mng"}>Production Management</MenuItem>
                                                    <MenuItem value={"marketing"}>Marketing</MenuItem>
                                                    <MenuItem value={"RandD"}>Research and Development</MenuItem>
                                                </Select>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    
                                    <Grid container item xs={12}>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item xs>
                                                <Typography>
                                                    What salary group were they part of?
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Select labelid="salaryLabel" id="salary" value={salary} onChange={handleSalaryChange} autoWidth>
                                                    <MenuItem value={"low"}>Low</MenuItem>
                                                    <MenuItem value={"medium"}>Medium</MenuItem>
                                                    <MenuItem value={"high"}>High</MenuItem>
                                                </Select>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    
                                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Submit</Button>
                                    
                                </Grid>
                            </form>

                        </Container>
                        <Typography component="h1" variant="h5" className={classes.submit}>
                           {responseData}
                        </Typography>
                    </div>
                </Card>
            </div>
        </Container>
    )
}