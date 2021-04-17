import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Gap, Header } from '../components'
import { colors, fonts } from '../utils'

const NewsDetail = ({navigation, route }) => {
    const {title, desc} = route.params;
    return (
        <View style={styles.page}>
            <Header title="News Detail" onPress={() => navigation.goBack()} type="dark" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Gap height={10} />
                    <Text style={styles.title}>{title}</Text>
                    <Gap height={15} />
                    <Text style={styles.desc}>{desc}</Text>
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
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    desc: {
        fontSize: 15,
        fontFamily: fonts.primary[400],
        color: colors.text.primary,
        textAlign: 'justify'
    }
})
