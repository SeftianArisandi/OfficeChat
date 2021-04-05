import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyNews } from '../../assets'
import { colors, fonts } from '../../utils'

const NewsItem = ({title, date, picture, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Image source={picture} style={styles.image} />
        </TouchableOpacity>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: 12,
        paddingTop: 16
    },
    titleWrapper: {
        flex: 1
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    },
    date: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 4
    },
    image: {
        width: 80,
        height: 60,
        borderRadius: 11
    }
})
