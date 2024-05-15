
import React, { useState } from 'react';
import { FlatList, Text, View,StyleSheet } from 'react-native';

const App = () => {
  const [data, setData] = useState([
    { id: '1', text: 'Tea' },
    { id: '2', text: 'Coffee' },
    { id: '3', text: 'Milk' },
    { id: '4', text: 'Ghee' },
    { id: '5', text: 'coffe' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default App;


const styles= StyleSheet.create({
  container:{
    border: 1,
    backgroundColor:'blue',
    padding: 10,
    margin:10,
  },
  text:{
    color:'white',
    fontSize:30,
    fontFamily:'Helvetica',
  }

});
