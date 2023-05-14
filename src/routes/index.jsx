import{createNativeStackNavigator} from '@react-navigation/native-stack'
import welcome from'../pages/welcome'
import inicio from'../pages/inicio'

const Stack= createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
            name = "welcome"
            component={welcome}
            options={{headerShown:false}}
            />  

            <Stack.Screen
            name = "inicio"
            component={inicio}
            options={{headerShown:false}}
            />  
        </Stack.Navigator>

        
    )
}