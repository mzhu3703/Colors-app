import React, { Component } from 'react';
import seedColor from './Components/seedColors'
import Palette from './Components/Palette'
import PaletteList from './Components/PaletteList'
import { generatePalette } from './Colorhelper'
import { Route, Switch } from 'react-router-dom'
import SingleColorPalette from './Components/SingleColorPalette';
import PaletteForm from './Components/PaletteForm'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      palettes : seedColor
    }
    this.savePalette = this.savePalette.bind(this)
    this.findPalette = this.findPalette.bind(this)
  }
  //finds correct palette off of its id
  findPalette(searchId) {
    for (let i = 0; i < this.state.palettes.length; i++) {
      if (this.state.palettes[i].id === searchId) {
        return this.state.palettes[i];
      }
    }
  }

  savePalette(newPalette){
    this.setState({
      palettes: [...this.state.palettes,newPalette]
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          {/* route to create a palette order matters could be rendered as an id or paletteName*/}
          <Route exacpt path='/palette/new' render={(routeProps) => <PaletteForm allPalettes = {this.state.palettes} savePalette = {this.savePalette} {...routeProps}/>} />
          {/* seedColor is passed as a prop to create each palette  */}
          <Route exact path='/' render={(routeProps) => <PaletteList  palettes={this.state.palettes} {...routeProps} />}
          />
          {/* route uses id of the palette. route used to find correct palette and correct props are passed and generated  */}
          <Route exact path='/palette/:id' render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
          {/* route for palettes of single color */}
          <Route exact path='/palette/:paletteName/:colorName' render={(routeProps) =>
            <SingleColorPalette colorId={routeProps.match.params.colorName} palette={generatePalette(this.findPalette(routeProps.match.params.paletteName))} />} />

        </Switch>
      </div>
    );
  }
}

export default App;
