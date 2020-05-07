
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
        alignItems: 'center',

    },
    displayButton: {
        marginRight: '10px',
    },
    backButton: {
        marginRight: '10px',
        textDecoration: 'none'
    }

})

export default styles;