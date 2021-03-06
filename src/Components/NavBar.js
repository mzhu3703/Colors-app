import React, { Component } from 'react';
import Slider from 'rc-slider';
import styles from '/home/michael/colors-app/colors-app/src/Styling/NavBarStyles.js'
import 'rc-slider/assets/index.css';
import Snackbar from '@material-ui/core/Snackbar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';


class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            open: false
        }
        this.handleSlide = this.handleSlide.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    //calls prop from parent 
    handleSlide(value) {
        this.props.slide(value)
    }

    //closes the snackbar when X'd out
    handleClose() {
        this.setState({
            open: false
        })
    }

    //changes the format off of button and activates snackbar 
    handleChange(evt) {
        this.setState({
            format: evt.target.value,
            open: true
        })
        //turns off snackbar after 2 sec
        setTimeout(() => {
            this.setState({
                open: false
            });
        }, 2000);
        //passes the new selected prop back up to parent 
        this.props.setFormat(evt.target.value);
    }

    render() {
        const {classes} = this.props;
        return (
            <header className= {classes.NavBar}>
                <div className= {classes.logo}>
                    <Link to='/'>react color picker</Link>
                </div>
                {this.props.showSlide &&
                    <div>
                        <span>Level: {this.props.slideDefault}</span>
                        <div className={classes.slideWrapper}>
                            <Slider className = {classes.slider} defaultValue={this.props.slideDefault} min={100} max={900} step={100} onAfterChange={this.handleSlide} />
                        </div>
                    </div>
                }
                <Select className= {classes.select} value={this.state.format} onChange={this.handleChange}>
                    <MenuItem value='hex' >Hex</MenuItem>
                    <MenuItem value='rgb' >Rgb</MenuItem>
                    <MenuItem value='rgba'>Rgba</MenuItem>
                </Select>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    message={<span id='snack-message'>{this.state.format} selected</span>}
                    action={
                        <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                />

            </header>
        );
    }
}

export default withStyles(styles)(NavBar);