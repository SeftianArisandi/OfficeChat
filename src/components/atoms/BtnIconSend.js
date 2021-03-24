import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconSendDark, IconSendLight } from '../../assets'
import { colors } from '../../utils'

const BtnIconSend = ({disable}) => {
    return (
        <View style={styles.container(disable)}>
            {disable && <IconSendDark />}
            {!disable && <IconSendLight />}
        </View>
    )
}

export default BtnIconSend

const styles = StyleSheet.create({
    container: (disable) => ({
        backgroundColor: disable ? colors.disable : colors.primary,
        width: 45,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    })
})
