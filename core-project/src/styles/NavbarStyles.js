import { fade } from '@material-ui/core/styles/colorManipulator'; 
// Fade is a function, where we can pass in: 
// A color 
// Decimal value 
// Then it fades that color by that amount! 

/* -------------------------------------------------------------------------- */
/*                             About NavbarStyles                             */
   /* 
   NavbarStyles is a file of JSS styles to override the default settings given 
   in Material UI. 
   From the docs: JSS is an authoring tool for CSS which allows you to use 
   JavaScript to describe styles in a declarative, conflict-free and reusable way
   */
/* -------------------------------------------------------------------------- */

const styles = theme => ({
    root: {
        width: "100%",
        marginBottom: 0 
    }, 
    grow: {
        flexGrow: 1
    }, 
    menuButton: {
        marginLeft: -12, 
        marginRight: 20
    }, 
    title: {
        // Below "sm" the title will not show at all
        display: "none", 
        [theme.breakpoints.up("sm")] : {
            // using the theme 
            // the styles written here will apply to the small breakpoint and UP
            display: "block"
        }
    }, 
    search: {
        position: "relative", 
        // using Material UI styles👇
        borderRadius: theme.shape.borderRadius, 
        backgroundColor: fade(theme.palette.common.white, 0.15), 
        marginLeft: 0,
        width: "100%", 
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing.unit, 
            width: "auto"
        },
        "&:hover": {
            // this is how we select the hover event in JSS ⬆
            backgroundColor: fade(theme.palette.common.white, 0.25)
        }, 
    }, 
    searchIcon: {
        width: theme.spacing.unit * 9, 
        height: "100%", 
        // all of this aligns the icon both vertically and horizontally 👇
        position: "absolute", 
        display: "flex", 
        alignItems: "center",
        justifyContent: "center"
    }
}); 

export default styles; 