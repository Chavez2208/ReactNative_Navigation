import React from 'react'
import { Text, View, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { };

const SccreenPage3 = ({ navigation }: Props) => {
    return (
        <View style={styles.marginGlobal}>
            <Button
                title="Ir pagina 3"
                onPress={() => navigation.navigate('SccreenPage1')}
            />
            <Button
                title="Ir a Home"
                onPress={() => navigation.popToTop()}

            />
        </View>
    )
}

export default SccreenPage3