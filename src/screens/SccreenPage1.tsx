import React, { useContext } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

interface Props extends StackScreenProps<any, any> { };

const SccreenPage1 = ({ navigation }: Props) => {

    const { login } = useContext(AuthContext)
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
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity
                    onPress={() => login('1234566LK')}
                    style={{ ...styles.btnGrande, backgroundColor: 'cyan' }}
                >
                    <Text style={styles.title}>Husky</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SccreenPage1