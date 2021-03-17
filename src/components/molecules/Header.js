import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconBackDark } from '../../assets'
import { colors } from '../../utils/colors'
import { Gap } from '../atoms'

const Header = () => {
    return (
        <View style={styles.container}>
            <IconBackDark />
            <Text style={styles.text}>Header</Text>
            <Gap width={24} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: colors.text.primary
    }
})
