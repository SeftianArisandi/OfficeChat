import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyUser } from '../assets'
import { ListMessage } from '../components'
import { colors, fonts } from '../utils'

const Messages = ({navigation}) => {
    const [messages] = useState([
        {
            id: 1,
            profile: DummyUser,
            name: 'Alexander Jannie',
            desc: 'Baik ibu, terima kasih banyak atas wakt...'
        },
        {
            id: 2,
            profile: DummyUser,
            name: 'Nairobi Putri Hayza',
            desc: 'Oh tentu saja tidak karena jeruk it...'
        },
        {
            id: 3,
            profile: DummyUser,
            name: 'John McParker Steve',
            desc: 'Oke menurut pak dokter bagaimana unt...'
        }
    ])
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Messages</Text>
            {
                messages.map(message => {
                    return <ListMessage key={message.id} profile={message.profile} name={message.name} desc={message.desc} onPress={() => navigation.navigate('Chatting')} />
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
