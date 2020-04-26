import React, { Component } from 'react';
import NavBar from './NavBar'
import ColorBox from './ColorBox'
import Footer from './Footer'
import '/home/michael/colors-app/colors-app/src/Styling/Palette.css';

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
        return (
            <div className="Palette">
                <div className='NavBar'>
                    <NavBar showSlide = {true} setFormat={this.setFormat} slideDefault={this.state.shade} slide={this.handleSlide} />
                </div>
                <div className="Palette-colors">
                    {this.props.palette.colors[this.state.shade].map(color =>
                        <ColorBox showLink = {true} key={color.name} color={color[this.state.format]} name={color.name} colorId = {color.id} paletteId = {this.props.palette.id}/>)}
                </div>
                <Footer emoji = {this.props.palette.emoji} content = {this.props.palette.paletteName} ></Footer>
                
            </div>
        )
    }
}

export default Palette;