import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser } from '../../assets'
import { colors, fonts } from '../../utils'

const ChatItemOther = ({text, date, photo}) => {
    return (
        <View style={styles.container}>
            <Image source={photo} style={styles.avatar} />
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>
    )
}

export default ChatItemOther

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingLeft: 16,
        flexDirection: 'row'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 15
    },
    chatContent: {
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.primary,
        maxWidth: '80%',
        borderRadius: 10
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.white
    },
    date: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 8
    }
})
