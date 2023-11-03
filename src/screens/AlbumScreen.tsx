import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const AlbumScreen = () => {

    const { logOut, authState } = useContext(AuthContext);

    return (
        <View style={styles.marginGlobal}>
            <Text style={styles.title}>Album Screen</Text>
            {
                authState.isLoggedIn &&
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={logOut}
                        style={{ ...styles.btnGrande, backgroundColor: 'cyan' }}
                    >
                        <Text style={styles.title}>Cerrar Sesión</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default AlbumScreen
