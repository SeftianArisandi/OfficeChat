import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ChatItem, Header, InputChat } from '../components'
import { colors, fonts, getData, showError } from '../utils'
import firestore from '@react-native-firebase/firestore'

const Chatting = ({navigation, route}) => {
    const {uid} = route.params;
    const [chatContent, setChatContent] = useState("");
    const [user, setUser] = useState({});
    const [otherUser, setOtherUser] = useState([]);
    const [chatData, setChatData] = useState([]);

    useEffect(() => {
        let mounted = true;
        getData('user')
        .then(response => {
            if(mounted){
                setUser(response);
            }
        });
        return () => mounted = false;
    }, []);

    useEffect(() => {
        setTimeout(() => {
            let mounted = true;
            firestore()
                .collection('users')
                .doc(uid)
                .get()
                .then(res => {
                    if(mounted){
                        const data = res;
                        const dataUser = data._data;
                        setOtherUser(dataUser);
                    }
                })
            return () => mounted = false;
        }, 300);
    }, []);

    useEffect(() => {
        let mounted = true;
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        firestore()
            .collection('chatting')
            .doc(`${user.uid}_${otherUser.uid}`)
            .collection(`${year}-${month}-${date}`)
            .onSnapshot((querySnapshot) => {
                if(mounted){
                    setChatData(querySnapshot.docs);
                }
            });
        return () => mounted = false;
    }, [user, otherUser]);

    const chatSend = () => {
        const today = new Date();
        const hour = today.getHours();
        const minutes = today.getMinutes();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        const time = today.getTime();
        const data = {
            sendBy: user.uid,
            chatDate: new Date().getTime(),
            chatTime: `${hour}:${minutes} ${hour > 12 ? 'PM' : 'AM'}`,
            chatContent: chatContent
        }
        // console.log('chat send: ', data);
        setChatContent('');
        firestore()
            .collection('chatting')
            .doc(`${user.uid}_${otherUser.uid}`)
            .collection(`${year}-${month}-${date}`)
            .doc(`${user.uid}${otherUser.uid}${time}`)
            .set(data)
            .then(() => {
                const dataHistoryUser = {
                    lastContentChat: chatContent,
                    lastChatDate: time,
                    uidPartner: otherUser.uid,
                    photo: otherUser.photo,
                    name: otherUser.name
                };
                firestore()
                    .collection('messages')
                    .doc(`${user.uid}`)
                    .collection(`${year}-${month}-${date}`)
                    .doc(`${otherUser.uid}`)
                    .set(dataHistoryUser);
            })
            .catch(error => {
                showError(error.message);
            });
        firestore()
            .collection('chatting')
            .doc(`${otherUser.uid}_${user.uid}`)
            .collection(`${year}-${month}-${date}`)
            .doc(`${otherUser.uid}${user.uid}${time}`)
            .set(data)
            .then(() => {
                const dataHistoryOther = {
                    lastContentChat: chatContent,
                    lastChatDate: time,
                    uidPartner: user.uid,
                    photo: user.photo,
                    name: user.name
                };
                firestore()
                    .collection('messages')
                    .doc(`${otherUser.uid}`)
                    .collection(`${year}-${month}-${date}`)
                    .doc(`${user.uid}`)
                    .set(dataHistoryOther);
            })
            .catch(error => {
                showError(error.message);
            });
    };

    // console.log('user', user);

    return (
        <View style={styles.page}>
            <Header title={otherUser.name} profession={otherUser.profession} photo={{uri: otherUser.photo}} type="dark-profile" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {chatData && chatData.map((chat, id) => {
                        const isMe = chat._data.sendBy === user.uid;
                        return <ChatItem 
                            key={id} 
                            isMe={isMe} 
                            text={chat._data.chatContent} 
                            date={chat._data.chatTime} 
                            photo={isMe ? null : {uri: otherUser.photo}}
                        />
                    })}
                </ScrollView>
            </View>
            <InputChat 
                value={chatContent} 
                onChangeText={(value) => setChatContent(value)} 
                onButtonPress={chatSend} 
            />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        flex: 1,
        paddingTop: 10
    },
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical: 15,
        textAlign: 'center'
    }
})
