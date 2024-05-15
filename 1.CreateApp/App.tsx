import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View,TextInput} from 'react-native';

const ExampleModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{ padding: 10,width:400,height:300,backgroundColor:'#15e6db'}}>
          <TextInput
        style={{height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10}}
        value={text}
      />
      <TextInput
        style={{height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10}}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={{color:'red', padding:70}}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text
          style={{
            color: 'blue',
            textShadowColor: 'green',
            backgroundColor: '#c5eb06',
            height: 50,
            width: 120,
            justifyContent: 'center',
            textAlign: 'center',
            padding:13
          }}>
          Show Modal
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExampleModal;
