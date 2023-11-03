import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme';
import TouchableIcon from '../components/TouchableIcon';


const Tab1Screen = () => {
    return (
        <View style={styles.marginGlobal}>
            <Text style={styles.title}> Iconos</Text>
            <Text>
                <TouchableIcon iconName="american-football-outline" />;
                <TouchableIcon iconName="aperture-outline" />;
                <TouchableIcon iconName="bag-add-outline" />;
            </Text>
        </View>
    )
}

export default Tab1Screen