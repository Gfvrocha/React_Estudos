import React from 'react';
import { View, Text } from 'react-native';

const Greeting = ({name}) => {
  return (
    <View style={{ alignItems: 'center'}}>
      <Text style={{ fontSize: 25}}>Hello {name}!</Text>
    </View>
  )
}

export default function LotsOfGreetings() {
  return (
    <View style={{ alignItems: 'center', top: 100}} >
      <Greeting name="Deus é Fiel"/>
      <Greeting name="Jesus Salva"/>

    </View>
  )
}