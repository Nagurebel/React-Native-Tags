

import {View, TextInput, Button} from 'react-native';
import React, { useState } from 'react';

const App = () => {
const [username,SetUsername]= useState('')
const [password,SetPassword]= useState('');

const handleUsernameChange = (uname)=>{
SetUsername(uname)
}

const handlePasswordChange = (pname)=>{
  SetPassword(pname)
}

const handleSubmit = () => {
  console.log(`Username: ${username}, Password: ${password}`);
};


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'darkcyan'}}>
      <TextInput
        style={{
          width: 200,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          padding: 10,
          backgroundColor:'#11f1c4'
        }}

        onChangeText={handleUsernameChange}
        value={username}
        placeholder='Enter username'
      />
      <TextInput 
      style={{
        width: 200,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          padding: 10,
          backgroundColor:'#11f1c4',
      }}
      onChangeText={handlePasswordChange}
      value={password}
      placeholder='Eneter password'
      secureTextEntry={true}
      
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default App;
