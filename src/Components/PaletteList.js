import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import styles from '/home/michael/colors-app/colors-app/src/Styling/PaletteListStyles.js'
//displays the different palettes on the front page . Parent is app
class PaletteList extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    link(id) {
        this.props.history.push(`/palette/${id}`)
    }

    //function that calls parent prop in app, passed to minipalette for paletteId
    handleDelete(id){
        this.props.handleDelete(id)
    }

    //in order to delete a palette need to render all the palettes without the miniPaletteId
    render() {
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.container}>
                    <nav className={this.props.classes.nav}>
                        <h1>React Colors</h1>
                        <Link to = '/palette/new'>Create Palette</Link>
                    </nav>
                    <div className={this.props.classes.palettes}>
                        {/* loops through the seedColor and creates a link to the corresponding palette  */}
                        {this.props.palettes.map(palettes => (
                            
                            <MiniPalette handleDelete= {this.handleDelete} key={palettes.id} id = {palettes.id} onClick={this.handleClick} palette={palettes} handleClick={() => this.link(palettes.id)}></MiniPalette>

                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);