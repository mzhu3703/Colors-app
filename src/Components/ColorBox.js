import React, { Component } from 'react';
import '/home/michael/colors-app/colors-app/src/Styling/ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from "chroma-js"
class ColorBox extends Component {

    constructor(props) {
        super(props);
        this.state = { copied: false }
        this.handleShow = this.handleShow.bind(this);
    }
    //sets the amount of time to display copy animation 
    handleShow() {
        this.setState({
            copied: true
        })
        setTimeout(() => {
            this.setState({
                copied: false
            });
        }, 1200);
    }

    render() {
        const isDark = chroma(this.props.color).luminance() <= 0.08;
        const isLight = chroma(this.props.color).luminance() > 0.7;
        return (
            <CopyToClipboard text={this.props.color} onCopy={this.handleShow}>
                <div style={{ background: this.props.color }} className="ColorBox">
                    <div style={{ background: this.props.color }} className={"copy-overlay " + (this.state.copied ? "show" : "")} />
                    <div className={"copy-color " + (this.state.copied ? "show" : "")}>
                        <h1>Copied</h1>
                        <p className={`copy-color-content ${isLight && "dark-text"}`}>{this.props.color}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={"" + (isDark === true ? 'light-text' : '')}>{this.props.name}</span>
                        </div>
                        <button className={`copy-button ${isLight && "dark-text"}`}> Copy</button>

                    </div>
                    {/* onClick takes to SingleColorPalette page  onClick to stop other animations from activating*/}
                    {this.props.showLink &&
                        <Link to={`/palette/${this.props.paletteId}/${this.props.colorId}`} onClick={e => e.stopPropagation()}>
                            <span className={`more-button ${isLight && "dark-text"}`}>MORE</span>
                        </Link>}
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;