import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
//import Logo from './components/logo.jsx'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Logo extends React.Component {
  render() {
    let pic = {
      uri: './media/Images/calculo.png'
    };
    return (
      <Image source={require('./media/Images/calculo.png')} style={{width:250, height:250}}/>
    );
  }
}

AppRegistry.registerComponent('calcuMath', () => Logo);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to CalcuMath v1!!!</Text>
        <Logo/>
      </View>

    );
  }
}
