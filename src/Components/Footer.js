import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from '/home/michael/colors-app/colors-app/src/Styling/FooterStyles.js'

//footer found in single palette and platte components 
class Footer extends Component{
    render(){
        const {classes} = this.props
        return(
            <footer className = {classes.paletteFooter}>
                    <p className = {classes.paletteFooterContent}>{this.props.content} </p>
                    <span className = {classes.emoji}>{this.props.emoji}</span>
                </footer>
        )
    }
}

export default withStyles(styles)(Footer);