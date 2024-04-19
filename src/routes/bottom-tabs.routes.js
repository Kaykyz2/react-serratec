import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ListaScreen from "../screens/Lista";
import ProfileScreen from "../screens/ProfileScreen";
import { AntDesign } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator(); //ASSIM UTILIZO O METODO DE DESESTRUTURAÇÃO PARA ACELERAR O PROCESSO

export default function Tab() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size }) => <AntDesign name="home" size={size} />,
        }}
      />
      <Screen
        name="lista"
        component={ListaScreen}
        options={{
          tabBarIcon: ({ size }) => <AntDesign name="infocirlce" size={size} />,
        }}
      />
      <Screen name="perfil" component={ProfileScreen} options={{
          tabBarIcon: ({ size }) => <AntDesign name="profile" size={size} />,
        }}
      />
    </Navigator>
  );
}
