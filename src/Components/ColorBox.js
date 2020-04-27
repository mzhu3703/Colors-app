import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import styles from '/home/michael/colors-app/colors-app/src/Styling/ColorBoxStyles.js'
import { withStyles } from '@material-ui/core/styles';


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
        const{classes} = this.props;
        return (
            <CopyToClipboard text={this.props.color} onCopy={this.handleShow}>
                <div style={{ background: this.props.color }} className= {classes.colorBox}>
                    <div style={{ background: this.props.color }} className={`${classes.copyOverlay} ${this.state.copied && classes.showOverlay}`} />
                    <div className={`${classes.copyMessage} ${this.state.copied && classes.showCopyMessage}`}>
                        <h1>Copied</h1>
                        <p className={classes.copyText}>{this.props.color}</p>
                    </div>
                    <div>
                        <div className= {classes.boxContent}>
                            <span className={classes.colorText}>{this.props.name}</span>
                        </div>
                        <button className={classes.copyButton}> Copy</button>

                    </div>
                    {/* onClick takes to SingleColorPalette page  onClick to stop other animations from activating*/}
                    {this.props.showFullPalette &&
                        <Link to={`/palette/${this.props.paletteId}/${this.props.colorId}`} onClick={e => e.stopPropagation()}>
                            <span className={classes.moreButton}>MORE</span>
                        </Link>}
                </div>
            </CopyToClipboard>
        )
    }
}

export default (withStyles)(styles)(ColorBox);