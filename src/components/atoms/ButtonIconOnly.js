import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IconBackDark, IconBackLight } from '../../assets';

const ButtonIconOnly = ({onPress, icon}) => {
    const Icon = () => {
        if (icon === 'back-dark'){
            return <IconBackDark />
        }
        if (icon === 'back-light'){
            return <IconBackLight />
        }
        return <IconBackDark />
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon />
        </TouchableOpacity>
    )
}

export default ButtonIconOnly
