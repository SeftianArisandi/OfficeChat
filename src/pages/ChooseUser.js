import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../components'

const ChooseUser = ({route, navigation}) => {
    const {divisi} = route.params
    return (
        <View>
            <Header title={`Divisi ${divisi}`} />
            <Text>choose user</Text>
        </View>
    )
}

export default ChooseUser

const styles = StyleSheet.create({})
