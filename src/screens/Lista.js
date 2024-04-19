
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Gatinhos } from '../data/gatinhos';

export default function ListaScreen({ navigation }) {
  return (
    <ScrollView>
      <Text>Eu sou a lista</Text>
      {Gatinhos.map((item, index) => (
        <View key={index}>
          <Image source={{ uri: item.url }} style={{ width: 100, height: 100 }} />
          <Text>{item.url}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
