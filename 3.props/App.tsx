import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [data,setData]= useState('This is my Initial data');

  const changeText = ()=>{
    setData("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tristique magna, in rhoncus nisi. Integer non lacus non lorem ullamcorper egestas. Quisque pharetra interdum sapien id pellentesque. Duis sit amet justo mauris. Curabitur auctor, enim sed convallis consequat, elit est dapibus arcu, vel scelerisque nunc justo in lectus. Etiam vel nulla sit amet odio euismod convallis. Suspendisse suscipit imperdiet tellus eu hendrerit. Aliquam auctor ante at risus sagittis, eget maximus lacus")
  }
  return (
    <View>
      <Text>{data}</Text>
      <Button title='click to update Text' onPress={changeText}>Click to Update the state</Button>
    </View>
  )
}

export default App