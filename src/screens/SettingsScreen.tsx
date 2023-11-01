import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SettingsScreen = () => {
    const insents = useSafeAreaInsets();

    return (
        <View style={{ ...styles.marginGlobal, marginTop: insents.top }}>
            <Text style={styles.title}>Configuracion General del APP</Text>
        </View>
    )
}

export default SettingsScreen