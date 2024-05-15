

import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class App extends Component {
  render() {
    return (
     <View style = {styles.container}>
         <View style = {styles.redbox} />
         <View style = {styles.bluebox} />
         <View style = {styles.blackbox} />
      </View>
    )
  }
}

export default App


const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'gray',
    height: 800,
  },
  redbox: {
      width: 100,
      height: 100,
      backgroundColor: 'red',
      padding:10,
   },
   bluebox: {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
      padding:10,
   },
   blackbox: {
      width: 100,
      height: 100,
      backgroundColor: 'black',
      padding:10,
   },
})

