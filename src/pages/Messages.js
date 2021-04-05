import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyUser } from '../assets'
import { ListMessage } from '../components'
import { colors, fonts, getData } from '../utils'
import firestore from '@react-native-firebase/firestore'

const Messages = ({navigation}) => {
    const [user, setUser] = useState({});
    const [messages, setMessages] = useState({});

    useEffect(() => {
        getData('user')
        .then(response => {
            setUser(response);
        });
        firestore()
            .collection('messages')
            .doc(user.uid)
            .get()
            .then(response => {
                setMessages(response._data);
            })
    }, []);

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Messages</Text>
                <ListMessage profile={DummyUser} name="Jefri Ronaldo" desc="Oke" onPress={() => navigation.navigate('Chatting')} type="next" />
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16
    }
})
