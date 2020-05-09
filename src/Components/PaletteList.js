import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styles from '/home/michael/colors-app/colors-app/src/Styling/PaletteListStyles.js'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
//displays the different palettes on the front page . Parent is app
class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDelete: false,
            deleteId: '',
        }
        this.deleteConfirmation = this.deleteConfirmation.bind(this);
    }

    link(id) {
        this.props.history.push(`/palette/${id}`)
    }

    //function that calls parent prop in app, passed to minipalette for paletteId
    //state is set to the deleted minipalette id when the dialog is opened
    deleteConfirmation(){
        this.props.handleDelete(this.state.deleteId);
        this.setState({
            showDelete: false,
        })
    }

    //opens the dialog box for deleting with id from child
    handleClickOpen = (id) => {
        this.setState({
            showDelete: true,
            deleteId: id
        });
        
    }

    handleClose = () => {
        this.setState({
            showDelete: false,
            deleteConfirmation: false,
        })
    }

    //in order to delete a palette need to render all the palettes without the miniPaletteId
    render() {
        const { classes } = this.props
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.container}>
                    <nav className={this.props.classes.nav}>
                        <h1>React Colors</h1>
                        <Link to='/palette/new'>Create Palette</Link>
                    </nav>
                    {/* loops through the seedColor and creates a link to the corresponding palette  */}
                    <TransitionGroup className={this.props.classes.palettes}>
                        {this.props.palettes.map(palettes => (
                            <CSSTransition
                                key={palettes.id}
                                timeout={500}
                                classNames="fade"
                            >
                                <MiniPalette routeProps = {this.props.history} showDelete = {this.handleClickOpen} handleDelete={this.handleDelete} key={palettes.id} id={palettes.id} onClick={this.handleClick} palette={palettes} 
                                handleClick={() => this.link(palettes.id)}></MiniPalette>
                            </CSSTransition>

                        ))}
                    </TransitionGroup>
                </div>
                <Dialog open={this.state.showDelete} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle className = {classes.deleteTitle} id="form-dialog-title">Delete this palette?</DialogTitle>
                        <div className = {classes.buttonWrapper}>
                        <Button className = {classes.checkButton} onClick={this.deleteConfirmation} color="primary">
                            <CheckIcon className = {classes.check}/>
                            <span>Delete</span>
                        </Button>
                        <Button className = {classes.closeButton} onClick={this.handleClose} color="primary">
                            <CloseIcon className = {classes.close}/>
                            <span>Cancel</span>
                        </Button>
                        </div>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);