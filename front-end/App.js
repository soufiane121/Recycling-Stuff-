import React from 'react';
import store from './Redux/store'
import {Provider} from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import LogSignParent from './Auth/LogSignParent'

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <LogSignParent />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
