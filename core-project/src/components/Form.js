import React, { Component } from 'react'; 

// Material UI imports 👇
import Avatar from '@material-ui/core/Avatar'; 
import Button from '@material-ui/core/Button'; 
import Checkbox from '@material-ui/core/Checkbox'; 
import CssBaseline from '@material-ui/core/CssBaseline'; 
import FormControl from '@material-ui/core/FormControl'; 
import FormControlLable from '@material-ui/core/FormControlLabel'; 
import Input from '@material-ui/core/Input'; 
import InputLabel from '@material-ui/core/InputLabel'; 
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'; 
import MenuItem from '@material-ui/core/MenuItem'; 
import Paper from '@material-ui/core/Paper'; 
import Select from '@material-ui/core/Select'; 
import Typography from '@material-ui/core/Typography'; 
// This is actually a higher order component to wrap the Form component with 👇
import styles from "../styles/FormStyles"; 
import { withStyles } from '@material-ui/core/styles'; 
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Form extends Component {

    render() {
        const { classes } = this.props; 
        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography variant="h5">Sign In</Typography>
                    {/* Select is a Material UI drop down component - default is set using `value` prop */}
                    <Select value="english">
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="spanish">Spanish</MenuItem>
                        <MenuItem values="french">French</MenuItem>
                    </Select>

                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" name="email" autoFocus></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" name="password"></Input>
                        </FormControl>
                        {/* The Material UI FormControlLabel is used for checkboxes, something that works a little differently than its cousin text input */}
                        <FormControlLabel label="Remember Me"
                        control={
                            <Checkbox color="primary" />
                        } />

                        <Button className={classes.submit}
                            variant="contained" 
                            type="submit" 
                            color="primary"
                            fullWidth > Submit </Button>
                    </form>
                </Paper>
            </main>
        ); 
    }
}

export default withStyles(styles)(Form); 