import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../utils'

const ChatItemMe = ({text, text2, date}) => {
    return (
        <View style={styles.container}>
            <View style={styles.chatContent}>
                <Text style={styles.text}>{text}</Text>
                <View style={styles.divider} />
                <Text style={styles.text}>{text2}</Text>
            </View>
            <Text style={styles.date}>{date}</Text>
        </View>
    )
}

export default ChatItemMe

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingRight: 16
    },
    chatContent: {
        padding: 12,
        backgroundColor: colors.cardLight,
        maxWidth: '75%',
        borderRadius: 10
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary
    },
    date: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 8
    },
    divider: {
        marginVertical: 5,
        borderWidth: 1,
        borderColor: colors.text.secondary
    }
})
