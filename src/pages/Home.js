import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DummyNews2 } from '../assets'
import { DivisionCategory, Gap, HomeProfile, NewsItem } from '../components'
import { colors, fonts } from '../utils'
import firestore from '@react-native-firebase/firestore'

const Home = ({navigation}) => {
    const [categoryDivision, setCategoryDivision] = useState([]);
    const [news, setNews] = useState([]);

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

    useEffect(() => {
        let mounted = true;
        firestore()
            .collection('news')
            .orderBy('newsDate', 'desc')
            .limit(3)
            .get()
            .then(success => {
                if(mounted){
                    setNews(success.docs);
                }
            })
            .catch(error => {
                console.log(error);
            });
        return () => mounted = false;
    }, [categoryDivision]);

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
                <Text style={styles.sectionLabel}>Pengumuman</Text>
                {
                    news && news.map((item, id) => {
                        return <NewsItem key={id} title={item._data.newsTitle} date={item._data.newsDate} picture={DummyNews2} onPress={() => navigation.navigate('NewsDetail', {title: item._data.newsTitle, desc: item._data.newsContent})} />
                    })
                }
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
