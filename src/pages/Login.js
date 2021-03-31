import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ILLogo } from '../assets'
import { Button, Gap, Input, Link } from '../components'
import { colors } from '../utils/colors'
import { showError, storeData } from '../utils'
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    const login = () => {
        dispatch({type: 'SET_LOADING', value: true});
        auth()
            .signInWithEmailAndPassword(email, password)
            .then((success) => {
                resetForm();
                const user = firestore()
                    .collection('users')
                    .doc(success.user.uid)
                    .get();
                user.then(res => {
                    const data = res;
                    const dataUser = data._data;
                    if (dataUser) {
                        storeData('user', dataUser);
                    }
                    dispatch({type: 'SET_LOADING', value: false});
                    navigation.replace('MainApp');
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch({type: 'SET_LOADING', value: false});
                showError(errorMessage);
            })
    };

    return (
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
