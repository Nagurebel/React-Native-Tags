import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const App = () => {
  const [data,setData]=useState();

  const getData = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
      console.log(response.data);
      setData(response.data);

    })
  }


  return (
    <View>
      <Text>The data is : {data}</Text>
  <Button onPress={getData} title='getData' />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})