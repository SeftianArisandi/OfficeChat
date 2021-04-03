import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../utils';
import { Button, Gap } from '../atoms';
import HeaderDarkProfile from './HeaderDarkProfile';

const Header = ({onPress, title, profession, photo, type}) => {
    if (type === 'dark-profile') {
        return <HeaderDarkProfile name={title} profession={profession} photo={photo} onPress={onPress} />
    }
    return (
        <View style={styles.container(type)}>
            <Button type="icon-only" icon={type === 'dark' ? 'back-light' : 'back-dark'} onPress={onPress} />
            <Text style={styles.text(type)}>{title}</Text>
            <Gap width={24} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: (type) => ({
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: type === 'dark' ? colors.secondary : colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    }),
    text: (type) => ({
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: type === 'dark' ? colors.white : colors.text.primary
    })
})
