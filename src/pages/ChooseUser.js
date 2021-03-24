import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyUser } from '../assets'
import { Header, ListMessage } from '../components'

const ChooseUser = ({route, navigation}) => {
    const {divisi} = route.params
    return (
        <View>
            <Header title={`Divisi ${divisi}`} onPress={() => navigation.goBack()} type="dark" />
            <ListMessage onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyUser} name="Seftian Arisandi" desc="IT Manager" />
            <ListMessage type="next" profile={DummyUser} name="Maman" desc="Back End Programmer" />
            <ListMessage type="next" profile={DummyUser} name="Abdul Jarkoni" desc="Front End Programmer" />
            <ListMessage type="next" profile={DummyUser} name="Erlando" desc="Database" />
            <ListMessage type="next" profile={DummyUser} name="Nurul Hasnah" desc="UI/UX Designer" />
        </View>
    )
}

export default ChooseUser

const styles = StyleSheet.create({})
