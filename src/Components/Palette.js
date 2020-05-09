
import React, { Component } from 'react';
import NavBar from './NavBar'
import ColorBox from './ColorBox'
import Footer from './Footer'
import { withStyles } from '@material-ui/core/styles';
import styles from '/home/michael/colors-app/colors-app/src/Styling/PaletteStyles.js'
//represents each palette. Linked from palettelist 
class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shade: 500,
            format: 'hex',
        }
        this.handleSlide = this.handleSlide.bind(this);
        this.setFormat = this.setFormat.bind(this);
    }

    //slider function to change the shade passed as prop to NavBar
    handleSlide(value) {
        this.setState({
            shade: value,
        })
    }
    //changes the fromat off of drop down menu passed as prop to NavBar
    setFormat(newFormat) {
        this.setState({
            format: newFormat
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <div className= {classes.Palette}>
                <div className='NavBar'>
                    <NavBar showSlide = {true} setFormat={this.setFormat} slideDefault={this.state.shade} slide={this.handleSlide} />
                </div>
                <div className={classes.PaletteColors}>
                    {this.props.palette.colors[this.state.shade].map(color =>
                        <ColorBox showFullPalette = {true} key={color.name} color={color[this.state.format]} name={color.name} colorId = {color.id} paletteId = {this.props.palette.id}/>)}
                </div>
                <Footer emoji = {this.props.palette.emoji} content = {this.props.palette.paletteName} ></Footer>
                
            </div>
        )
    }
}

export default withStyles(styles)(Palette);