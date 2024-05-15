
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Image
        style={{width: '50%', height: '50%', paddingTop:150}}
        source={{
          uri: 'https://bitstreamio.com/assets/img/logggo.png',
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
