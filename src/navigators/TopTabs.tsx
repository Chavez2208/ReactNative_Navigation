import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native'
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumScreen from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';

const TabTopNav = createMaterialTopTabNavigator();

export const TopTabs = () => {
    const { top: paddingTop } = useSafeAreaInsets();
    return (
        <TabTopNav.Navigator
            style={{ paddingTop }}
            sceneContainerStyle={{ backgroundColor: 'white' }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'ChatScreen':
                            iconName = "chatbox-outline"
                            break;
                        case 'ContactScreen':
                            iconName = "people-outline"
                            break;
                        case 'AlbumScreen':
                            iconName = "images-outline"
                            break;
                    }
                    return <Text style={{ color, alignItems: 'center' }}><Icon name={iconName} size={20} color={colors.primary} /></Text>
                },
                tabBarPressColor: colors.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary
                },
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    marginBottom: 10
                },

            })}
        >
            <TabTopNav.Screen name="ChatScreen" component={ChatScreen} options={{ tabBarShowLabel: false }} />
            <TabTopNav.Screen name="ContactScreen" component={ContactScreen} options={{ tabBarShowLabel: false }} />
            <TabTopNav.Screen name="AlbumScreen" component={AlbumScreen} options={{ tabBarShowLabel: false }} />
        </TabTopNav.Navigator>
    )
}