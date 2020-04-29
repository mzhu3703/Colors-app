import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import MakeColorBox from './MakeColorBox'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 330;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
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
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
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

})

class PaletteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            currentColor: 'teal',
            newColor: '',
            paletteArray: [
            ]
        }
        this.addColor = this.addColor.bind(this)

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('colorNameExists', (value) => {
            for (let color in this.state.paletteArray) {
                if (value.toLowerCase() === this.state.paletteArray[color].name.toLowerCase()) {
                    return false;
                }
            }
            return true;
           
        });
        ValidatorForm.addValidationRule('colorExists', (value) => {
            for (let c in this.state.paletteArray) {
                if (this.state.currentColor === this.state.paletteArray[c].color) {
                    return false;
                }
            }
            return true;
        });
    }


    handleDrawerOpen = () => {
        this.setState({ open: true })
    };

    handleDrawerClose = () => {
        this.setState({ open: false })
    };
    //adds the new color to the paletteArray
    addColor() {
        //creates color object 
        const addedColor = { color: this.state.currentColor, name: this.state.newColor }
        this.setState({
            paletteArray: [...this.state.paletteArray, addedColor],
            newColor : ''
        })

    }
    //updates the name of the new color added to palette
    handleChange = (event) => {
        const color = event.target.value;
        this.setState({ newColor: color });
    }

    //handles changing color of chrome picker
    changeColor = (color) => {
        this.setState({ currentColor: color.hex });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Persistent drawer
          </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <div className="drawer-content">
                        <Typography variant='h4'>Design your palette</Typography>
                        <div>
                            <Button variant="contained" color="primary">
                                Clear Palette
                            </Button>
                            <Button variant="contained" color="secondary">
                                Random Color
                            </Button>

                        </div>
                        <div>
                            <ChromePicker color={this.state.currentColor}
                                onChangeComplete={this.changeColor} />
                        </div>
                        <ValidatorForm onSubmit={this.addColor}>
                            <TextValidator
                                label="Color name"
                                onChange={this.handleChange}
                                value={this.state.newColor}
                                validators={['required','colorNameExists',  'colorExists']}
                                errorMessages={['This field is required','Color name already used',  'Color already created']}
                            />
                             <Button type = 'submit' variant='contained' color='primary' style={{ background: this.state.currentColor }}>Add Color</Button>
                        </ValidatorForm>
                       

                    </div>

                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    {this.state.paletteArray.map(box =>
                        <MakeColorBox color={box.color} name={box.name} />)}
                </main>

            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(PaletteForm)
