import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Button } from 'react-native'
import { styles } from '../theme/appTheme'


const SccreenPage2 = () => {

    //Cargando el Hoook ya creado de native
    const navigator = useNavigation()
    useEffect(() => {
        navigator.setOptions({
            title: 'Back',
            headerBackTitle: '' //El boton de regreso
        })
    }, [])
    return (
        <View style={styles.marginGlobal}>
            <Button
                title="Ir pagina 3"
                onPress={() => navigator.navigate('SccreenPage3')}
            />
        </View>
    )
}

export default SccreenPage2