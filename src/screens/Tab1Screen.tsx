import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, styles } from '../theme/appTheme';


const Tab1Screen = () => {
    return (
        <View style={styles.marginGlobal}>
            <Text style={styles.title}> Iconos</Text>
            <Text>
                <Icon name="american-football-outline" size={30} color={colors.primary} />;
                <Icon name="aperture-outline" size={30} color={colors.primary} />;
                <Icon name="bag-add-outline" size={30} color={colors.primary} />;
            </Text>
        </View>
    )
}

export default Tab1Screen