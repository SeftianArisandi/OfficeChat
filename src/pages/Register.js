import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input, Loading } from '../components'
import { colors } from '../utils/colors'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { showMessage, hideMessage } from "react-native-flash-message"
import { storeData } from '../utils'

const Register = ({navigation}) => {
    const [noKaryawan, setNoKaryawan] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [bod, setBod] = useState('');
    const [divisi, setDivisi] = useState('');
    const [profession, setProfession] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [loading, setLoading] = useState(false);

    const resetForm = () => {
        setNoKaryawan('');
        setName('');
        setGender('');
        setBod('');
        setDivisi('');
        setProfession('');
        setEmail('');
        setPassword('');
    }

    const onContinue = () => {
        setLoading(true);
        const dataUser = {
            noKaryawan: noKaryawan,
            name: name,
            gender: gender,
            bod: bod,
            divisi: divisi,
            profession: profession,
            email: email,
        };
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((success) => {
                firestore()
                    .collection('users')
                    .doc(success.user.uid)
                    .set(dataUser)
                    .then(() => {
                        const data = {
                            name: name,
                            profession: profession,
                            email: email,
                            uid: success.user.uid
                        }
                        storeData('user', dataUser);
                        resetForm();
                        setLoading(false);
                        navigation.navigate('UploadPhoto', data);
                        console.log('register success');
                    })
            })
            .catch((error) => {
                const errorMessage = error.message
                setLoading(false);
                showMessage({
                    message: errorMessage,
                    type: 'default',
                    backgroundColor: '#E06379',
                    color: colors.white
                });
                console.log(error);
            })
    }

    return (
        <>
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
            {loading && <Loading />}
        </>
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
