import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { StackNavigator } from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigationMenu = () => {

    const { width } = useWindowDimensions(); //Este Hook de Reeact me trae el width de la pantlala del movil

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'left', //La posición del drawer
                drawerType: `${width >= 768 ? 'permanent' : 'back'}`  //Como se mostrara, el tipo de animacion
            }}
        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} options={{ title: 'Home' }} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Configuracion' }} />
        </Drawer.Navigator>
    )
}
