import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"

    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"

    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "spacebetween"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "5%",

    }
}
class PaletteList extends Component {
    constructor(props) {
        super(props);
        
    }

    link(id){
        this.props.history.push(`/palette/${id}`)
    }
  
    render() {
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.container}>
                    <nav className={this.props.classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={this.props.classes.palettes}>
                        {/* loops through the seedColor and creates a link to the corresponding palette  */}
                        {this.props.palettes.map(palettes => (

                            <MiniPalette onClick={this.handleClick} palette={palettes} handleClick = {() => this.link(palettes.id)}></MiniPalette>

                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);