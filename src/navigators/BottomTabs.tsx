import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, Platform } from 'react-native'
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colors, styles } from '../theme/appTheme';
import { TopTabs } from './TopTabs';

export const BottomTabs = () => {
    return Platform.OS === 'ios'
        ? <BottomTabsIOS /> : <BottomTabsAndroid />
}

// componente para Tab Andorid
const BottomTabAndroid = createMaterialBottomTabNavigator();
const BottomTabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = "arrow-up-outline"
                            break;
                        case 'Tab2Screen':
                            iconName = "arrow-down-outline"
                            break;
                        case 'Tab3Screen':
                            iconName = "battery-charging-outline"
                            break;
                        case 'StackNavigator':
                            iconName = "layers-outline"
                            break;
                        case 'TopTabs':
                            iconName = "copy-outline"
                            break;
                    }
                    return <Icon name={iconName} size={20} color={focused ? colors.primary : colors.primary} />

                },
                headerShown: true,
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                }
            })}
        >
            <BottomTabAndroid.Screen name="Tab1Screen" component={Tab1Screen} options={{ tabBarLabel: '' }} />
            <BottomTabAndroid.Screen name="Tab2Screen" component={Tab2Screen} options={{ tabBarLabel: '' }} />
            <BottomTabAndroid.Screen name="Tab3Screen" component={Tab3Screen} options={{ tabBarLabel: '' }} />
            <BottomTabAndroid.Screen name="TopTabs" component={TopTabs} options={{ tabBarLabel: '' }} />
            <BottomTabAndroid.Screen name="StackNavigator" component={StackNavigator} options={{ tabBarLabel: '' }} />
        </BottomTabAndroid.Navigator>
    );
}

//Componente de tab para telefonos IOS
const BottomTabIOS = createBottomTabNavigator();
const BottomTabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={
                {
                    backgroundColor: 'white'
                }
            }
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = "T1"
                            break;
                        case 'Tab2Screen':
                            iconName = "T2"
                            break;
                        case 'Tab3Screen':
                            iconName = "T3"
                            break;
                        case 'StackNavigator':
                            iconName = "Stc"
                            break;
                        case 'TopTabs':
                            iconName = "TopT"
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>
                },
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 1,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    marginBottom: 10
                },

            })}
        >
            <BottomTabIOS.Screen name="Tab1Screen" component={Tab1Screen} options={{ title: 'Tab1' }} />
            <BottomTabIOS.Screen name="Tab2Screen" component={Tab2Screen} options={{ title: 'Tab2' }} />
            <BottomTabIOS.Screen name="Tab3Screen" component={Tab3Screen} options={{ title: 'Tab3' }} />
            <BottomTabIOS.Screen name="TopTabs" component={TopTabs} options={{ title: 'TopTabs' }} />
            <BottomTabIOS.Screen name="StackNavigator" component={StackNavigator} options={{ title: 'Stack' }} />
        </BottomTabIOS.Navigator >
    )
}


