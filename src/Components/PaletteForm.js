import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import DraggableContainer from './DraggableContainer'
import arrayMove from 'array-move';
import PaletteFormNav from './PaletteFormNav.js'

const drawerWidth = 330;

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
//array to check if color has been added for random color function
const checkExists = [];

class PaletteForm extends Component {
    static defaultProps = {
        max: 20
    }
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            currentColor: 'teal',
            paletteName: '',
            newColor: '',
            paletteArray: this.props.allPalettes[0].colors
        }

        this.randomColor = this.randomColor.bind(this)
        this.clearPalette = this.clearPalette.bind(this)
        this.addColor = this.addColor.bind(this)
        this.savePalette = this.savePalette.bind(this)
        this.handleChange = this.handleChange.bind(this)
       
        this.delete = this.delete.bind(this);
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
        ValidatorForm.addValidationRule('paletteNameExists', (value) => {
            for (let i = 0; i < this.props.allPalettes.length; i++) {
                if (value.toLowerCase() === this.props.allPalettes[i].paletteName.toLowerCase()) {
                    return false;
                }
            }
            return true;
        });
    }

    handleDrawerClose = () => {
        this.setState({ open: false })
    };
    handleDrawerOpen = () => {
        this.setState({ open: true })
    };
    
    //adds the new color to the paletteArray
    addColor() {
        //creates color object 
        const addedColor = { color: this.state.currentColor, name: this.state.newColor }
        this.setState({
            paletteArray: [...this.state.paletteArray, addedColor],
            newColor: ''
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

    //saves palette, props passed from parent in app component
    savePalette(paletteName) {
        const newPalette = {
            paletteName: paletteName,
            colors: this.state.paletteArray,
            id: paletteName.replace(/\s/g, '-')
        }
        this.props.savePalette(newPalette)
        this.props.history.push("/")
    }

    clearPalette() {
        const emptyArray = []
        this.setState({
            paletteArray: emptyArray
        })
    }

    randomColor() {
        const allPaletteColor = [];
        //allPaletteColor now has all the colors and names
        this.props.allPalettes.forEach((element) => {
            allPaletteColor.push(...element.colors); // 100, 200, 300
        });
        //gets a random object from existing palettes
        let randomColor = allPaletteColor[Math.floor(Math.random() * allPaletteColor.length)]; 
        if (!this.inArray(checkExists, randomColor)) {
            checkExists.push(randomColor)
            this.setState({
                paletteArray: [...this.state.paletteArray, randomColor],
            })
        }
    }

    //helper function to not duplicate a color from previous palettes
    inArray(array, el) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].name === el.name) {
                return true;
            }
        }
        return false;
    }

    
    delete(name) {

        const newArray = this.state.paletteArray.filter(color => color.name !== name)
        this.setState({
            paletteArray: newArray
        })

    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ paletteArray }) => ({
            paletteArray: arrayMove(paletteArray, oldIndex, newIndex),
        }));
    }

    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <div className={classes.root}>
                <PaletteFormNav handleDrawerOpen = {this.handleDrawerOpen} open = {this.state.open} handleSave = {this.savePalette}/>
                {/* <AppBar
                    color='default'
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
                            Create a palette
                        </Typography>
                        <ValidatorForm onSubmit={this.handleSubmit}>
                            <TextValidator
                                label='palette name'
                                value={this.state.paletteName}
                                onChange={this.paletteName}
                                validators={['required', 'paletteNameExists']}
                                errorMessages={['This field is required', 'Palette Name already used']}
                            />
                            <Button type="submit" variant="contained" color="secondary">
                                Save Palette
                            </Button>
                        </ValidatorForm>
                        <Link to='/'>
                            <Button variant="contained" color="primary">
                                go Back
                            </Button>
                        </Link>
                    </Toolbar>

                </AppBar> */}
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
                            <Button onClick={this.clearPalette} variant="contained" color="primary">
                                Clear Palette
                            </Button>
                            <Button disabled = {this.state.paletteArray.length >= this.props.max} onClick={this.randomColor} variant="contained" color="secondary">
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
                                validators={['required', 'colorNameExists', 'colorExists']}
                                errorMessages={['This field is required', 'Color name already used', 'Color already created']}
                            />
                            <Button disabled = {this.state.paletteArray.length >= this.props.max} type='submit' variant='contained' color='primary' style={{ background: this.state.currentColor }}>Add Color</Button>
                        </ValidatorForm>


                    </div>

                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    {/* container accepts the array of colors as a prop, function is also passed down for deleting */}
                    <DraggableContainer
                        paletteArray={this.state.paletteArray}
                        handleDelete={this.delete}
                        axis="xy"
                        onSortEnd={this.onSortEnd}
                    />
                </main>

            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(PaletteForm)
