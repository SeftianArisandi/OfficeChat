import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input } from '../components'
import { colors } from '../utils/colors'

const Register = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title="Register" />
            <View style={styles.content}>
                <Input label="Full Name" />
                <Gap height={20} />
                <Input label="Job Position" />
                <Gap height={20} />
                <Input label="Email" />
                <Gap height={20} />
                <Input label="Password" />
                <Gap height={40} />
                <Button title="Continue" onPress={() => navigation.navigate('UploadPhoto')} />
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        padding: 40,
        paddingTop: 0
    }
})
