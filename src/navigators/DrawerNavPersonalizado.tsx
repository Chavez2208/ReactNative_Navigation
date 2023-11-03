import React, { useContext } from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions, Text, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { colors, styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BottomTabs } from './BottomTabs';
import { AuthContext } from '../context/AuthContext';

const Drawer = createDrawerNavigator();


const DrawerNavPersonalizado = () => {
    const { width, height } = useWindowDimensions(); //Este Hook de Reeact me trae el width de la pantlala del movil

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'left', //La posición del drawer
                drawerType: `${width >= height ? 'permanent' : 'back'}`  //Como se mostrara, el tipo de animacion
            }}
            drawerContent={(props) => <MenuItems {...props} />}
        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="BottomTabs" component={BottomTabs} />
        </Drawer.Navigator>
    )
}

export default DrawerNavPersonalizado

const MenuItems = ({ navigation }: DrawerContentComponentProps) => {
    const { authState: { jwtoken } } = useContext(AuthContext)
    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image source={{
                    uri: `${!jwtoken ? 'https://images.squarespace-cdn.com/content/v1/5756a430356fb02fbe7c6743/1513433721815-5IE027UA11WGHJW6WQIT/Tinja+%26+Alex+Husy+Farm-22.jpg'
                        : 'https://cdn.redcanina.es/wp-content/uploads/2020/05/09102649/HUSKY.jpg'}`
                }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones de Menu */}
            <View style={styles.MenuItemsContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('StackNavigator')}
                    style={styles.BtnMenuItem}>
                    <Text style={styles.MenuTextItem}>
                        <Icon name="bag-add-outline" size={20} color={colors.primary} /> Navegacion</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SettingsScreen')}
                    style={styles.BtnMenuItem}>
                    <Text style={styles.MenuTextItem}><Icon name="settings-outline" size={20} color={colors.primary} /> Configuracion</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('BottomTabs')}
                    style={styles.BtnMenuItem}>
                    <Text style={styles.MenuTextItem}><Icon name="ellipsis-horizontal-outline" size={20} color={colors.primary} /> Bottom tabs</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}