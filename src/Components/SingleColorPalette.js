import React, { Component } from 'react'
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import styles from '/home/michael/colors-app/colors-app/src/Styling/PaletteStyles.js'

//palette of a single color. Linked from color box
class SingleColorPalette extends Component {

    constructor(props) {
        super(props)
        this._shades = this.getShade(this.props.palette, this.props.colorId)
        this.state = {
            format: 'hex'
        }
        this.setFormat = this.setFormat.bind(this);
    }

    //gets all the different shades of one color
    getShade(palette, colorId) {
        //array to store all the shades
        let singleColorArray = [];
        //loops through every shade in palette colors
        for (let shade in palette.colors) {
            //adds all the shades that matches colorId to array 
            singleColorArray.push(...palette.colors[shade].filter(color => color.id === colorId))
        }
        return singleColorArray.slice(1)
    }

    setFormat(newFormat) {
        this.setState({
            format: newFormat
        })
    }

    render() {
        const singlePalette = this._shades.map(color => (
            <ColorBox showFullPalette = {false}  key={color.name} color={color[this.state.format]} name={color.name} />
        ))
        const {classes} = this.props;
        return (
            <div className= {classes.Palette}>
                <div className='NavBar'>
                    <NavBar setFormat={this.setFormat} />
                </div>
                <div className= {classes.PaletteColors}>{singlePalette}
                    <div className = {classes.goBack}>
                        <Link  to = {`/palette/${this.props.palette.id}`}>Back</Link>
                    </div>
                </div>
                <Footer emoji = {this.props.palette.emoji} content = {this.props.palette.paletteName} ></Footer>
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);