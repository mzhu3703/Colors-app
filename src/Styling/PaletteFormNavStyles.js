import sizes from './Sizes'
const drawerWidth = 340;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        color: "default",
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    appBarShift: {
        width: `calc(97% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        [sizes.down("xs")] :{
            
        },

    },
    displayButton: {
        marginRight: '10px',
        [sizes.down("xs")] :{
            fontSize: '0.55rem',
            fontWeight: '1000'
        },
    },
    backButtonLink: {
        marginRight: '10px',
        textDecoration: 'none',
       
    },
    backButton:{
        [sizes.down("xs")] :{
            marginLeft : '0.25rem',
            fontSize: '0.55rem',
            fontWeight: '1000'
         
        },

    }

})

export default styles;