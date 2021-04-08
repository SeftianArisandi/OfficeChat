import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyUser } from '../assets'
import { ListMessage } from '../components'
import { colors, fonts, getData } from '../utils'
import firestore from '@react-native-firebase/firestore'

const Messages = ({navigation}) => {
    const [user, setUser] = useState({});
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        let mounted = true;
        getData('user')
        .then(response => {
            setUser(response);
        });
    }, []);

    useEffect(() => {
        let mounted = true;
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        firestore()
            .collection('messages')
            .doc(`${user.uid}`)
            .collection(`${year}-${month}-${date}`)
            .onSnapshot((querySnapshot) => {
                if(mounted){
                    setMessages(querySnapshot.docs);
                }
            });
        return () => mounted = false;
    }, [user]);

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Messages</Text>
            {
                messages && messages.map((message, id) => {
                    return <ListMessage key={id} profile={{uri: message._data.photo}} name={message._data.name} desc={message._data.lastContentChat} onPress={() => navigation.navigate('Chatting', {uid: message._data.uidPartner})} type="next" />
                })
            }
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
