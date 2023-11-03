import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext';

const Tab2Screen = () => {

    const { singIn, authState: { isLoggedIn } } = useContext(AuthContext)
    return (
        <View style={styles.marginGlobal}>
            <Text style={styles.title}> Tab 2 Page</Text>
            {!isLoggedIn &&
                <TouchableOpacity
                    onPress={singIn} style={{ backgroundColor: 'red', margin: 'auto', padding: 10, borderRadius: 10, alignItems: 'center', marginTop: 10 }}
                    activeOpacity={0.5}>
                    <Text>Se consume el estado Global</Text>
                </TouchableOpacity>}

        </View>
    )
}

export default Tab2Screen
