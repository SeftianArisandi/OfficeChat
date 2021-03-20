import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DivisionCategory, Gap, HomeProfile, NewsItem } from '../components'
import { colors, fonts } from '../utils'

const Home = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.page}>
                <Gap height={30} />
                <HomeProfile />
                <Text style={styles.welcome}>Mulai berkomunikasi dengan siapa hari ini?</Text>
                <View style={styles.wrapperScroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.category}>
                            <Gap width={16} />
                            <DivisionCategory />
                            <DivisionCategory />
                            <DivisionCategory />
                            <DivisionCategory />
                            <Gap width={6} />
                        </View>
                    </ScrollView>
                </View>
                <Text style={styles.sectionLabel}>Announcement</Text>
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <Gap height={30} />
            </View>   
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 16,
        backgroundColor: colors.white,
        flex: 1
    },
    welcome: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 209
    },
    wrapperScroll: {
        marginHorizontal: -16
    },
    category: {
        flexDirection: 'row',
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16
    }
})
