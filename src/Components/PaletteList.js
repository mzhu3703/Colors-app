import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import styles from '/home/michael/colors-app/colors-app/src/Styling/PaletteListStyles.js'
//displays the different palettes on the front page . Parent is app
class PaletteList extends Component {

    link(id) {
        this.props.history.push(`/palette/${id}`)
    }

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
                            <MiniPalette key={palettes.id} onClick={this.handleClick} palette={palettes} handleClick={() => this.link(palettes.id)}></MiniPalette>

                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);