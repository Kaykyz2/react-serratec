import { NavigationContainer } from "@react-navigation/native"
//import Stack from "./stack.rotes"
//import Tab from "./bottom-tabs.routes"
import Drawer from "./drawer.routes"




export default function Rotas() {
    return(
        <NavigationContainer>
            {/* <Stack /> */}
            {/* <Tab /> */}
            <Drawer />
        </NavigationContainer>

    )
}