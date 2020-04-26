import React, { Component } from 'react';
import seedColor from './Components/seedColors'
import Palette from './Components/Palette'
import PaletteList from './Components/PaletteList'
import { generatePalette } from './Colorhelper'
import { Route, Switch } from 'react-router-dom'
import SingleColorPalette from './Components/SingleColorPalette';
class App extends Component {

  //finds correct palette off of its id
  findPalette(searchId) {
    for (let i = 0; i < seedColor.length; i++) {
      if (seedColor[i].id === searchId) {
        return seedColor[i];
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          {/* seedColor is passed as a prop to create each palette  */}
          <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedColor} {...routeProps} />}
          />
          {/* route uses id of the palette. route used to find correct palette and correct props are passed and generated  */}
          <Route exact path='/palette/:id' render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
          <Route exact path='/palette/:paletteName/:colorName' render={(routeProps) => 
          <SingleColorPalette colorId = {routeProps.match.params.colorName} palette = {generatePalette(this.findPalette(routeProps.match.params.paletteName)) }/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
