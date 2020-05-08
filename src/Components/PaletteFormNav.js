import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';
import styles from '/home/michael/colors-app/colors-app/src/Styling/PaletteFormNavStyles.js'

class PaletteFormNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayForm: false
        }
        this.handleSaveFormNav = this.handleSaveFormNav.bind(this);
        this.displayForm = this.displayForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    handleSaveFormNav(palette,emoji) {
        this.props.handleSave(palette,emoji)

    }

    displayForm() {
        this.setState(prevState => ({
            displayForm: !prevState.displayForm
        }));
    }

    closeForm(){
        this.setState({
            displayForm: false
        })

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    color='default'
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: this.props.open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.props.handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, this.props.open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Create a palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.buttons}>
                        <Button
                            className={classes.displayButton}
                            variant="contained"
                            color="secondary"
                            onClick={this.displayForm}
                        >
                            Save Palette
                        </Button>
                        <Link className={classes.backButtonLink} to='/'>
                            <Button className = {classes.backButton} variant="contained" color="primary">
                                Go Back
                            </Button>
                        </Link>
                    </div>

                </AppBar>
                {this.state.displayForm && <PaletteMetaForm handleMetaNav={this.handleSaveFormNav} allPalettes={this.props.allPalettes} displayForm = {this.closeForm}/>}

            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);