import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconHome, IconHomeActive, IconMessages, IconMessagesActive, IconNews, IconNewsActive } from '../../assets'
import { colors, fonts } from '../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if (title === 'Home'){
            return active ? <IconHomeActive /> : <IconHome />
        }
        if (title === 'Messages'){
            return active ? <IconMessagesActive /> : <IconMessages />
        }
        if (title === 'News'){
            return active ? <IconNewsActive /> : <IconNews />
        }
        return <IconHome />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (active) => ({
        fontSize: 10,
        color: active ? colors.white : colors.text.menuInactive,
        fontFamily: fonts.primary[600],
        marginTop: 4
    })
})
