import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input } from '../components'
import { colors } from '../utils/colors'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { showError, storeData } from '../utils'
import { useDispatch } from 'react-redux';

const Register = ({navigation}) => {
    const [noKaryawan, setNoKaryawan] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [bod, setBod] = useState('');
    const [divisi, setDivisi] = useState('');
    const [profession, setProfession] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [uid, setUid] = useState('');
    
    const dispatch = useDispatch();

    const resetForm = () => {
        setNoKaryawan('');
        setName('');
        setGender('');
        setBod('');
        setDivisi('');
        setProfession('');
        setEmail('');
        setPassword('');
        setUid('');
    }

    const onContinue = () => {
        dispatch({type: 'SET_LOADING', value: true});
        const dataUser = {
            noKaryawan: noKaryawan,
            name: name,
            gender: gender,
            bod: bod,
            divisi: divisi,
            profession: profession,
            email: email,
            uid: uid
        };
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((success) => {
                dataUser.uid = success.user.uid;
                firestore()
                    .collection('users')
                    .doc(success.user.uid)
                    .set(dataUser)
                    .then(() => {
                        const data = {
                            name: name,
                            profession: profession,
                            uid: success.user.uid
                        }
                        storeData('user', dataUser);
                        resetForm();
                        dispatch({type: 'SET_LOADING', value: false});
                        navigation.navigate('UploadPhoto', dataUser);
                    })
            })
            .catch((error) => {
                const errorMessage = error.message
                dispatch({type: 'SET_LOADING', value: false});
                showError(errorMessage);
                console.log(error);
            })
    }

    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title="Register" />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input value={noKaryawan} onChangeText={(value) => setNoKaryawan(value)} label="Nomor Karyawan" />
                    <Gap height={20} />
                    <Input value={name} onChangeText={(value) => setName(value)} label="Nama Lengkap" />
                    <Gap height={20} />
                    <Input value={gender} onChangeText={(value) => setGender(value)} label="Jenis Kelamin" />
                    <Gap height={20} />
                    <Input value={bod} onChangeText={(value) => setBod(value)} label="Tanggal Lahir" />
                    <Gap height={20} />
                    <Input value={divisi} onChangeText={(value) => setDivisi(value)} label="Divisi" />
                    <Gap height={20} />
                    <Input value={profession} onChangeText={(value) => setProfession(value)} label="Posisi Pekerjaan" />
                    <Gap height={20} />
                    <Input value={email} onChangeText={(value) => setEmail(value)} label="Email Address" />
                    <Gap height={20} />
                    <Input value={password} onChangeText={(value) => setPassword(value)} secureTextEntry label="Password" />
                    <Gap height={30} />
                    <Button title="Continue" onPress={onContinue} />
                    <Gap height={60} />
                </ScrollView>
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
