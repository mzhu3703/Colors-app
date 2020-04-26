import React,{Component} from 'react'

class Footer extends Component{
    render(){
        return(
            <footer className = 'palette-footer'>
                    <p className = 'palette-footer-content'>{this.props.content} </p>
                    <span className = 'emoji'>{this.props.emoji}</span>
                </footer>
        )
    }
}

export default Footer;