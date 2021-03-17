import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../assets'
import { Button, Gap, Input, Link } from '../components'

const Login = () => {
    return (
        <View style={styles.page}>
            <Gap height={40} />
            <ILLogo style={styles.logo} />
            <Gap height={70} />
            {/* <Text style={styles.title}>Masuk dan mulai berkomunikasi</Text> */}
            <Input label="Email Address" />
            <Gap height={20} />
            <Input label="Password" />
            <Gap height={10} />
            <Link title="Forgot My Password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" />
            <Gap height={30} />
            <Link title="Create New Account" size={16} align="center" />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        padding: 40,
        flex: 1
    },
    logo: {
        alignSelf: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: '#112340',
        marginVertical: 40,
        maxWidth: 153,
    }
})
