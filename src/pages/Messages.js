import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListMessage } from '../components'
import { colors, fonts } from '../utils'

const Messages = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Messages</Text>
            <ListMessage />
            <ListMessage />
            <ListMessage />
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16
    }
})
