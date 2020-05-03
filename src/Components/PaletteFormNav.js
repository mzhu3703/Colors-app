import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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
})

class PaletteFormNav extends Component {

    constructor(props){
        super(props);
        this.state = {
            openuu: false,
            paletteName: '',
        }
        this.paletteName = this.paletteName.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    paletteName(evt) {
        this.setState({ paletteName: evt.target.value });
    }

    handleSave(){
        this.props.handleSave(this.state.paletteName)

    }


    render() {
        const {classes, open} = this.props;
     
        return (
            <div>
                <CssBaseline />
                <AppBar
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
                            onClick={this.props.handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Create a palette
                        </Typography>
                        <ValidatorForm onSubmit={this.handleSave}>
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

                </AppBar>

            </div>
        )
    }
}

export default withStyles(styles, {withTheme : true})(PaletteFormNav);