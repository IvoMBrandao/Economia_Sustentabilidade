import{createNativeStackNavigator} from '@react-navigation/native-stack'
import welcome from'../pages/welcome'
import singin from'../pages/singin'

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
            name = "singin"
            component={singin}
            options={{headerShown:false}}
            />  
        </Stack.Navigator>

        
    )
}