import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableContainer from './DraggableContainer'
import arrayMove from 'array-move';
import PaletteFormNav from './PaletteFormNav.js';
import ColorPickerForm from './ColorPickerForm';
import seedColors from './seedColors'
import styles from '/home/michael/colors-app/colors-app/src/Styling/PaletteFormStyles.js'
//array to check if color has been added for random color function
const checkExists = [];

class PaletteForm extends Component {
    static defaultProps = {
        max: 20
    }
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            paletteName: '', 
            paletteArray: seedColors[0].colors
        }

        this.randomColor = this.randomColor.bind(this)
        this.clearPalette = this.clearPalette.bind(this)
        this.addColor = this.addColor.bind(this)
        this.savePalette = this.savePalette.bind(this)
        this.delete = this.delete.bind(this);
    }


    handleDrawerClose = () => {
        this.setState({ open: false })
    };
    handleDrawerOpen = () => {
        this.setState({ open: true })
    };
    
    //adds the new color to the paletteArray
    addColor(currentColor, colorName) {
        //creates color object 
        const addedColor = { color: currentColor, name: colorName }
        this.setState({
            paletteArray: [...this.state.paletteArray, addedColor],
            newColor: ''
        })

    }
  

    //saves palette, props passed from parent in app component. Passed tp PaletteFormNav
    savePalette(paletteName,emoji) {
        const newPalette = {
            paletteName: paletteName,
            colors: this.state.paletteArray,
            id: paletteName.replace(/\s/g, '-'),
            emoji: emoji
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
        while (!this.inArray(checkExists, randomColor)) {
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
        const paletteArrayLength = this.state.paletteArray.length
        return (
            <div className={classes.root}>
                <PaletteFormNav allPalettes= {this.props.allPalettes} handleDrawerOpen = {this.handleDrawerOpen} open = {this.state.open} handleSave = {this.savePalette}/>
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
                    <div className= {classes.drawerContent}>
                        <Typography variant='h4'>Design your palette</Typography>
                        <div className = {classes.drawerButtons}>
                            <Button className = {classes.button}onClick={this.clearPalette} variant="contained" color="primary">
                                Clear Palette
                            </Button>
                            <Button className = {classes.button} disabled = {this.state.paletteArray.length >= this.props.max} onClick={this.randomColor} variant="contained" color="secondary">
                                Random Color
                            </Button>

                        </div>

                        <ColorPickerForm length = {paletteArrayLength} paletteArray = {this.state.paletteArray} addColor = {this.addColor}/>
                       

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
                        distance = {20}
                    />
                </main>

            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(PaletteForm)
