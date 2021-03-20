import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ILLogo } from '../assets'
import { Button, Gap, Input, Link } from '../components'
import { colors } from '../utils/colors'

const Login = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Gap height={40} />
            <ILLogo style={styles.logo} />
            <Gap height={70} />
            <Input label="Email Address" />
            <Gap height={20} />
            <Input label="Password" />
            <Gap height={10} />
            <Link title="Forgot My Password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
            <Gap height={30} />
            <Link title="Create New Account" size={16} align="center" />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        padding: 40,
        flex: 1
    },
    logo: {
        alignSelf: 'center'
    }
})
