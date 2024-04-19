//criar um TextInput
//Vincular ao state
//Um Button
//Função no onPress do Button handleForm
//Função handleForm deve imprimir o texto digitado em um Alert.alert

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

export default function FormScreen() {
    const [textInput, setTextInput] = useState('');

    const handleForm = () => {
        Alert.alert('Texto Digitado', textInput);
    };

    return (
        <View>
            <TextInput
                value={textInput}
                onChangeText={setTextInput} // Corrigido para onChangeText={setTextInput}
                placeholder="Digite algo"
            />
            <Button title="Clique aqui" onPress={handleForm} />
        </View>
    );
}

