import React, { Component } from 'react'
import { Button,TouchableOpacity,Text } from 'react-native'

const App = () => {
  const handlePress= ()=>{
  console.warn('pressed button')
  } 

   return (
      <>
      <Button 
      onPress={handlePress}
      title='Clickme'
      color="red"

      />

      {/* Touchanble Opacity */}

      <TouchableOpacity>
  <Text style={{backgroundColor:'blue',textAlign:'center', color:'white', height:30,margin:10}}>
  TouchableOpacity
  </Text>
      </TouchableOpacity>
     
      </>
   )
}
export default App