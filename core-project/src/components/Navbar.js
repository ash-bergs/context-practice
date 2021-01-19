import React, { Component } from 'react'; 

// * Material UI Imports 
import AppBar from '@material-ui/core/AppBar'; 
import IconButton from '@material-ui/core/IconButton'; 
import InputBase from '@material-ui/core/InputBase'; 
import SearchIcon from '@material-ui/icons/Search'; 
import Switch from '@material-ui/core/Switch'; 
import Toolbar from '@material-ui/core/Toolbar'; 
import Typography from '@material-ui/core/Typography'; 

import { withStyles } from '@material-ui/core/styles'; 
// Higher Order Wrapper Component 👆 Now we have to wrap the component with these styles 
import styles from '../styles/NavbarStyles'; 

class Navbar extends Component {

    render() {
        //* deconstructing the classes prop off of the props object - connection to our style JSS 
        const { classes } = this.props; 
        return (
            <div className={classes.root}>
            {/* Eventually the color prop will be controlled by Context, i.e. light and dark theme! */}
                <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit">
                        <span>English</span>
                    </IconButton>
                    <Typography
                    className={classes.title}
                    variant="h6"
                    color="inherit"
                    >
                    App Title
                    </Typography>
                    <Switch />
                    <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{
                                root: classes.inputRoot, 
                                input: classes.inputInput
                            }} />
                        </div>
                </Toolbar>
                </AppBar>
            </div>
        ); 
    }
}

export default withStyles(styles)(Navbar);
// here 👆 is where we're wrapping the component with the JSS styles we defined  
//* Now inside of the props objects we should have a prop called CLASSES - what we were using above for our CLASSNAMES 