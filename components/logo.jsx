import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Logo extends Component {
  render() {
    let pic = {
      uri: '../media/images/calculo.png'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}
