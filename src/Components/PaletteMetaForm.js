import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const styles = theme => ({
    displayButton: {
        marginRight: '10px',
    },

})

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paletteOpen: true,
            emojiOpen: false,
            paletteName: '',
        }
        this.paletteName = this.paletteName.bind(this);
        this.handleSaveMeta = this.handleSaveMeta.bind(this);
        this.savePalette = this.savePalette.bind(this);
    }

    savePalette(emoji){
        console.log(emoji.native)
        this.props.handleMetaNav(this.state.paletteName, emoji.native)
    }

    handleSaveMeta() {
        this.props.handleMetaNav(this.state.paletteName)
    }

    handleEmojiOpen = () => {
        this.setState({
            emojiOpen: true,
            paletteOpen: false,
        })
    }


    paletteName(evt) {
        this.setState({ paletteName: evt.target.value });
    }

    handleClickOpen = () => {
        this.setState({
            paletteOpen: true
        });
    };

    handleClose = () => {
        this.setState({
            paletteOpen: false
        },
            //resets the state of paletteformnav when closed
            this.props.displayForm());

    };

    componentDidMount() {
        ValidatorForm.addValidationRule('paletteNameExists', (value) => {
            for (let i = 0; i < this.props.allPalettes.length; i++) {
                if (value.toLowerCase() === this.props.allPalettes[i].paletteName.toLowerCase()) {
                    return false;
                }
            }
            return true;
        });
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <Dialog open = {this.state.emojiOpen}>
                    <Picker 
                        title='Pick your emoji…'
                        onSelect={this.savePalette}
                        />
                </Dialog>
                <Dialog
                    open={this.state.paletteOpen}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                    <ValidatorForm onSubmit={this.handleEmojiOpen}>
                        <DialogContent>
                            <DialogContentText>
                                Please enter a name for your new palette!. It needs to be unique!
                            </DialogContentText>
                           
                            <TextValidator
                                label='Palette name'
                                value={this.state.paletteName}
                                onChange={this.paletteName}
                                fullWidth
                                margin='normal'
                                validators={['required', 'paletteNameExists']}
                                errorMessages={['This field is required', 'Palette Name already used']}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit" value="Submit" variant="contained" color="secondary">
                                Save Palette
                                </Button>
                            <Button onClick={this.handleClose} variant="contained" color="primary">
                                Cancel
                        </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(PaletteMetaForm);
