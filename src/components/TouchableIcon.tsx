import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native'
import { colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string
}

const TouchableIcon = ({ iconName }: Props) => {

    const { changeFavIcon } = useContext(AuthContext)
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => changeFavIcon(iconName)}
        >
            <Icon name={iconName} size={30} color={colors.primary} />
        </TouchableOpacity>
    )
}

export default TouchableIcon