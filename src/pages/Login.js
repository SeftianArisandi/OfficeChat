import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ILLogo } from '../assets'
import { Button, Gap, Input, Link, Loading } from '../components'
import { colors } from '../utils/colors'
import { showMessage, hideMessage } from "react-native-flash-message"
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { storeData } from '../utils'

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    const login = () => {
        setLoading(true);
        auth()
            .signInWithEmailAndPassword(email, password)
            .then((success) => {
                resetForm();
                setLoading(false);
                const user = firestore()
                    .collection('users')
                    .doc(success.user.uid)
                    .get();
                user.then(res => {
                    const data = res;
                    const dataUser = data._data;
                    // console.log(data._data);
                    if (dataUser) {
                        storeData('user', dataUser);
                    }
                    navigation.replace('MainApp');
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoading(false);
                showMessage({
                    message: errorMessage,
                    type: 'default',
                    backgroundColor: '#E06379',
                    color: colors.white
                });
                console.log('error login');
            })
    };

    return (
        <>
            <View style={styles.page}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Gap height={40} />
                    <ILLogo style={styles.logo} />
                    <Gap height={70} />
                    <Input value={email} onChangeText={(value) => setEmail(value)} label="Email Address" />
                    <Gap height={20} />
                    <Input value={password} onChangeText={(value) => setPassword(value)} secureTextEntry label="Password" />
                    <Gap height={10} />
                    <Link title="Forgot My Password" size={12} />
                    <Gap height={40} />
                    <Button title="Sign In" onPress={login} />
                    <Gap height={30} />
                    <Link title="Create New Account" size={16} align="center" onPress={() => navigation.navigate('Register')}/>
                </ScrollView>
            </View>
            {loading && <Loading />}
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        paddingHorizontal: 40,
        flex: 1
    },
    logo: {
        alignSelf: 'center'
    }
})
