import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableWithoutFeedback, Alert } from 'react-native';
import Login from './screens/Login'
export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Login/>
    </View>
  );
}
