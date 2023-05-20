import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CronometroApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        consumeOfWater:0.15,
        water:0,
        _Cronometro: this.props.minutes,
        get Cronometro() {
            return this._Cronometro;
        },
        set Cronometro(value) {
            this._Cronometro = value;
        },

    }

  }

  valuepersecond(){
       this.water = this.consumeOfWater * this.Cronometro
  }

}
