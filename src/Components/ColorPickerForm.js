import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';


const styles = theme => ({
    picker:{
        width: '100% !important',
        marginTop: '15px',
        marginBottom: '10px',
    },
    addColorButton:{
        width: '100%',
        padding: '1rem',
        fontSize: '1.4rem',
        marginTop: '1rem',
    },
    colorName:{
        width: '100%',
    }
});
class ColorPickerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentColor: 'teal',
            newColorName: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }


    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('colorNameExists', (value) => {
            for (let color in this.props.paletteArray) {
                if (value.toLowerCase() === this.props.paletteArray[color].name.toLowerCase()) {
                    return false;
                }
            }
            return true;

        });
        ValidatorForm.addValidationRule('colorExists', (value) => {
            for (let c in this.props.paletteArray) {
                if (this.state.currentColor === this.props.paletteArray[c].color) {
                    return false;
                }
            }
            return true;
        });
    }


    handleSubmit() {
        this.props.addColor(this.state.currentColor, this.state.newColorName)
        this.setState({
            newColorName: ''
        })
    }

    //updates the name of the new color added to palette
    handleChange = (event) => {
        const colorName = event.target.value;
        this.setState({ newColorName: colorName });
    }

    //handles changing color of chrome picker
    changeColor = (color) => {
        this.setState({ currentColor: color.hex });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <ChromePicker className = {classes.picker} color={this.state.currentColor}
                    onChangeComplete={this.changeColor} />
                <ValidatorForm onSubmit={this.handleSubmit}>
                    <TextValidator
                        className = {classes.colorName}
                        label="Color name"
                        onChange={this.handleChange}
                        value={this.state.newColorName}
                        validators={['required', 'colorNameExists', 'colorExists']}
                        errorMessages={['This field is required', 'Color name already used', 'Color already created']}

                    />
                    <Button
                        className = {classes.addColorButton}
                        disabled={this.props.length >= 20}
                        type="submit"
                        variant='contained'
                        color='primary'
                        style={{ background: this.props.length >= 20 ? 'rgba(0,0,0,0.13)' : this.state.currentColor }}>
                        {this.props.length >= 20 ? 'Palette Full' : 'Add Color'}
                    </Button>
                </ValidatorForm>

            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(ColorPickerForm)