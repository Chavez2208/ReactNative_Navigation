import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {
    const insents = useSafeAreaInsets();
    const { authState } = useContext(AuthContext);

    return (
        <View style={{ ...styles.marginGlobal, marginTop: insents.top }}>
            <Text style={styles.title}>Configuracion General del APP</Text>
            <Text style={styles.title}>
                {JSON.stringify(authState, null, 3)}
            </Text>

            {
                authState.favoriteIcon && (
                    <Icon name={authState.favoriteIcon} size={50} color={colors.primary} />
                )
            }
        </View>
    )
}

export default SettingsScreen