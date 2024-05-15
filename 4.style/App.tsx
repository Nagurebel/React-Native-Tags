import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'blue','fontSize':30,'fontWeight':300,'margin-top':100}}>Welocme To First Application</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#f4dbdb',
  }
})
export default App

