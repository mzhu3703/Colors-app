const drawerWidth = 400;

const styles = theme => ({
    root: {
        display: 'flex',

    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
     
    },
    drawerPaper: {
        width: drawerWidth,
        display: 'flex',
        alignItems: 'center',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        width: '100%',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        height: "calc(100vh - 64px)",
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    drawerContent: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column'
    },
    drawerButtons:{
        width: '100%',
    },
    button:{
        marginTop: '5px',
        width: '50%',
    },

})

export default styles;