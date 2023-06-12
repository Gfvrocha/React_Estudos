import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';

const Greeting = ({name}) => {
  return (
    <View style={{ alignItems: 'center'}}>
      <Text style={{ fontSize: 25}}> Wellcome {name}!</Text>
    </View>
  )
}

export default function LotsOfGreetings() {
  let img = 'https://avatars.githubusercontent.com/u/100851480?v=4'

  return (
    <View style={{ alignItems: 'center', top: 100}} >
      <Greeting name="Felipe"/>
      <Image
        source={{ uri: img }}
        style={{ width: 200, height: 200, top: 50}}
       /> 
       <Button title='Curtir' />
       <TouchableOpacity style={{ width: 100, padding: 10, top: 50, backgroundColor: 'yellow'}}> 
        <Text style={{ color: '#fff' }}>Avançar</Text> 
       </TouchableOpacity> 
      
    </View>
  )
}