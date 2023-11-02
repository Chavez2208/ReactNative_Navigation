import { createStackNavigator } from '@react-navigation/stack';
import SccreenPage1 from '../screens/SccreenPage1';
import SccreenPage2 from '../screens/SccreenPage2';
import SccreenPage3 from '../screens/SccreenPage3';
import PersonaScren from '../screens/PersonaScren';

export type RootStackParams = {
    SccreenPage1: undefined
    SccreenPage2: undefined
    SccreenPage3: undefined
    PersonaScren: { id: number, name: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            // initialRouteName='SccreenPage3' //Se pone por defecto que pagina incia
            screenOptions={{
                headerShown: false, //Para eliminar o ocultar el encabezado
                headerStyle: {
                    elevation: 0, //Eiminar la linea Android
                    shadowColor: 'transparent' //Esto es para IOS eliminar la linea
                },
                cardStyle: {
                    backgroundColor: 'white'
                },
            }}
        >
            <Stack.Screen name="SccreenPage1" options={{ title: "Page 1" }} component={SccreenPage1} />
            <Stack.Screen name="SccreenPage2" options={{ title: "Page 2" }} component={SccreenPage2} />
            <Stack.Screen name="SccreenPage3" options={{ title: "Page 3" }} component={SccreenPage3} />
            <Stack.Screen name="PersonaScren" options={{ title: "Persona" }} component={PersonaScren} />
        </Stack.Navigator>
    );
}