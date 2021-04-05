import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { DummyNews, ILNewsBg } from '../assets'
import { NewsItem } from '../components'
import { colors, fonts } from '../utils'

const News = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILNewsBg} style={styles.background}>
                <Text style={styles.title}>Announcements</Text>
                <Text style={styles.desc}>3 Tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <NewsItem title="Pengumuman A" date="Today" picture={DummyNews} onPress={() => navigation.navigate('NewsDetail', {title: "Pengumuman A"})} />
                <NewsItem title="Pengumuman B" date="Today" picture={DummyNews} onPress={() => navigation.navigate('NewsDetail', {title: "Pengumuman B"})} />
                <NewsItem title="Pengumuman C" date="Today" picture={DummyNews} onPress={() => navigation.navigate('NewsDetail', {title: "Pengumuman C"})} />
            </View>
        </View>
    )
}

export default News

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    background: {
        height: 240,
        paddingTop: 30
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.white,
        marginTop: 6,
        textAlign: 'center'
    },
    content: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
        marginTop: -30,
        paddingHorizontal: 16,
        paddingTop: 14
    }
})
