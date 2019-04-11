import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={[styles.container,styles.v]}>
        <Hello/>
      </View>
    );
  }
}

class Hello extends Component {
  render() {
    return (
      <View style={{elevation : 2,backgroundColor:'white'}}>
        <View style={{width:50,height:50,backgroundColor:'white'}}>
        
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  v: {
    backgroundColor: 'white'
  },
  white_text:{
    color: '#fff'
  }
});
