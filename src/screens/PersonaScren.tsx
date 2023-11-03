import React, { useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigators/StackNavigator';
import { AuthContext } from '../context/AuthContext';


// TODO: Esto en caso que se requier implementar de forma rapida
// interface RouterParams {
//     id: number,
//     name: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScren'> { }

const PersonaScren = ({ route, navigation }: Props) => {

    // const params = route.params as RouterParams;
    const params = route.params;

    const { changeName } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, [])

    useEffect(() => {
        changeName(params.name);
    }, [])

    return (
        <View style={styles.marginGlobal}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}

export default PersonaScren
