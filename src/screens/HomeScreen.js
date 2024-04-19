import {View, Text, Button, StyleSheet, Alert}from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <AntDesign name="home" size={65} color="black" />
            <Text style={styles.texto}>HomeScreen</Text>
            <Button 
            title='Ir para perfil'
            onPress={() => navigation.navigate('profile')}/>
             <Button 
            title='IR PARA LISTA'
            onPress={() => navigation.navigate('Lista')}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20 ,
    },
    texto: {
        
        fontSize: 40,
        fontWeight: 'bold',
        
    }
})