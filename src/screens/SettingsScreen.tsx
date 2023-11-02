import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {
    const insents = useSafeAreaInsets();
    const { authState, singIn } = useContext(AuthContext);

    return (
        <View style={{ ...styles.marginGlobal, marginTop: insents.top }}>
            <Text style={styles.title}>Configuracion General del APP</Text>
            <Text style={styles.title}>
                Esto es el estado Global del Context

                {JSON.stringify(authState, null, 3)}
            </Text>
        </View>
    )
}

export default SettingsScreen