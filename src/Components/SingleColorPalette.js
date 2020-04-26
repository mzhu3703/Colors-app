import React, { Component } from 'react'
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import Footer from './Footer'
import {Link} from 'react-router-dom'
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
            <ColorBox key={color.name} color={color[this.state.format]} name={color.name} />
        ))

        return (
            <div className='singleColorPalette'>
                <div className='NavBar'>
                    <NavBar setFormat={this.setFormat} />
                </div>
                <div className='Palette-colors'>{singlePalette}
                    <div className = 'back ColorBox'>
                        <Link className = 'back-button'>back</Link>
                    </div>
                </div>
                <Footer emoji = {this.props.palette.emoji} content = {this.props.palette.paletteName} ></Footer>
            </div>
        )
    }
}

export default SingleColorPalette;