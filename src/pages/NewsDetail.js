import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { DummyNews } from '../assets'
import { Gap, Header } from '../components'
import { colors, fonts } from '../utils'

const NewsDetail = ({navigation, route }) => {
    const {title, desc, photo} =route.params;
    return (
        <View style={styles.page}>
            <Header title="News Detail" onPress={() => navigation.goBack()} type="dark" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Gap height={10} />
                    <Text style={styles.title}>{title}</Text>
                    <Gap height={10} />
                    <Image source={DummyNews} style={styles.img} />
                    <Gap height={15} />
                    <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Gap height={30} />
                </View>
            </ScrollView>
        </View>
    )
}

export default NewsDetail

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        paddingHorizontal: 20
    },
    title: {
        fontSize: 23,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    desc: {
        fontSize: 17,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        textAlign: 'justify'
    }
})
