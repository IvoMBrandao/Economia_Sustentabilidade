import{createNativeStackNavigator} from '@react-navigation/native-stack'
import welcome from'../pages/Welcome'
import inicio from'../pages/Inicio'
import perfil from '../pages/Perfil';
const Stack= createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
            name = "Welcome"
            component={welcome}
            options={{headerShown:false}}
            />  

            <Stack.Screen
            name = "inicio"
            component={inicio}
            options={{headerShown:false}}
            />  

            <Stack.Screen
            name="perfil"
            component={perfil}
            options={{headerShown:false}}
            />
        </Stack.Navigator>

       
    )
}