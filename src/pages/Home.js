import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DummyNews } from '../assets'
import { DivisionCategory, Gap, HomeProfile, NewsItem } from '../components'
import { colors, fonts } from '../utils'
import firestore from '@react-native-firebase/firestore'

const Home = ({navigation}) => {
    const [categoryDivision, setCategoryDivision] = useState([]);

    useEffect(() => {
        let mounted = true;
        firestore()
            .collection('category_division')
            .get()
            .then(success => {
                if(mounted){
                    setCategoryDivision(success.docs);
                }
            })
            .catch(error => {
                console.log(error);
            });
        return () => mounted = false;
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.page}>
                <Gap height={30} />
                <HomeProfile onPress={() => navigation.replace('UserProfile')} />
                <Text style={styles.welcome}>Mulai berkomunikasi dengan siapa hari ini?</Text>
                <View style={styles.wrapperScroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.category}>
                            <Gap width={16} />
                            {
                                categoryDivision.map((item => {
                                    return <DivisionCategory key={item._data.id} divisi={item._data.category} onPress={() => navigation.navigate('ChooseUser', {category: item._data.category})} />
                                }))
                            }
                            <Gap width={6} />
                        </View>
                    </ScrollView>
                </View>
                <Text style={styles.sectionLabel}>Announcement</Text>
                <NewsItem title="Pengumuman A" date="Today" picture={DummyNews} onPress={() => navigation.navigate('NewsDetail', {title: "Pengumuman A"})} />
                <NewsItem title="Pengumuman B" date="Today" picture={DummyNews} onPress={() => navigation.navigate('NewsDetail', {title: "Pengumuman B"})} />
                <NewsItem title="Pengumuman C" date="Today" picture={DummyNews} onPress={() => navigation.navigate('NewsDetail', {title: "Pengumuman C"})} />
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
