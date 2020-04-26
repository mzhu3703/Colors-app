import React,{Component} from 'react'

//footer found in single palette and platte components 
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