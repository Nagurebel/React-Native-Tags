import React from 'react';
import {  WebView } from 'react-native-webview';
import {View} from 'react-native';

const MyWebView = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://www.bitstreamio.com/' }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default MyWebView;
