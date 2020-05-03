import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DraggableContainer from './DraggableContainer'
import arrayMove from 'array-move';
import PaletteFormNav from './PaletteFormNav'

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
class ColorPickerForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            open: true,
        }
    }
    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <div className = {classes.root}>
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
                            <Button disabled={this.state.paletteArray.length >= this.props.max} onClick={this.randomColor} variant="contained" color="secondary">
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
                            <Button disabled={this.state.paletteArray.length >= this.props.max} type='submit' variant='contained' color='primary' style={{ background: this.state.currentColor }}>Add Color</Button>
                        </ValidatorForm>
                    </div>
                </Drawer>

            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(ColorPickerForm)