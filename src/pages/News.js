import React, { useState, useEffect } from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { DummyNews2, ILNewsBg } from '../assets'
import { NewsItem } from '../components'
import { colors, fonts, getData } from '../utils'
import firestore from '@react-native-firebase/firestore';

const News = ({navigation}) => {
    const [profile, setProfile] = useState({});
    const [news, setNews] = useState([]);

    useEffect(() => {
        getData('user').then(response => {
            setProfile(response);
        });
    }, []);

    useEffect(() => {
        let mounted = true;
        firestore()
            .collection('news')
            .orderBy('newsDate', 'desc')
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
    }, [profile]);

    return (
        <View style={styles.page}>
            <ScrollView>
                <ImageBackground source={ILNewsBg} style={styles.background}>
                    <Text style={styles.title}>{profile.language === 'id' ? 'Pengumuman' : 'Announcements'}</Text>
                    <Text style={styles.desc}>{`${news.length} Tersedia`}</Text>
                </ImageBackground>
                <View style={styles.content}>
                    {
                        news && news.map((item, id) => {
                            return <NewsItem key={id} title={item._data.newsTitle} date={item._data.newsDate} picture={DummyNews2} onPress={() => navigation.navigate('NewsDetail', {title: item._data.newsTitle, desc: item._data.newsContent})} />
                        })
                    }
                </View>
            </ScrollView>
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
