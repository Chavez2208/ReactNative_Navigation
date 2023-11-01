import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { };

const SccreenPage1 = ({ navigation }: Props) => {
    return (
        <View style={styles.marginGlobal}>
            <Button
                title='Ir a pagina 2'
                onPress={() => navigation.navigate('SccreenPage2')}
            />

            {/* <Button
                title='Ir Persona'
                onPress={() => navigation.navigate('PersonaScren')}
            /> */}

            <Text style={{ ...styles.title, marginTop: 20 }}>
                Navegar con Argumentos
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScren', {
                        id: 1,
                        name: 'Pedro'
                    })}
                    style={styles.btnGrande}
                >
                    <Text style={styles.title}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScren', {
                        id: 2,
                        name: 'Maria'
                    })}
                    style={styles.btnGrande}
                >
                    <Text style={styles.title}>Maria </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SccreenPage1