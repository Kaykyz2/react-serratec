import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import ListaScreen from "../screens/Lista";

const {Navigator, Screen} = createStackNavigator(); //ASSIM UTILIZO O METODO DE DESESTRUTURAÇÃO PARA ACELERAR O PROCESSO
export default function Stack(){
    return(

        <Navigator initialRouteName="HomeScreen"> 
            <Screen name='home' component={HomeScreen} options={"Pagina Inicial"}/>
            <Screen name='profile' component={ProfileScreen}/>
            <Screen name='Lista' component={ListaScreen}/>
        </Navigator>

    )
}