import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input, Profile } from '../components'
import { colors, getData } from '../utils'
import { showMessage, hideMessage } from "react-native-flash-message"
import firestore from '@react-native-firebase/firestore'

const UpdateProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        noKaryawan: '',
        name: '',
        gender: '',
        bod: '',
        divisi: '',
        profession: '',
        email: '',
        uid: ''
    });
    const [password, setPassword] = useState('');

    useEffect(() => {
        getData('uid').then((getuid) => {
            getData('user').then((response) => {
                const data = response;
                data.photo = {uri: response.photo};
                data.uid = getuid.uid;
                setProfile(data);
                // storeData('user', data);
            });
        })
    }, []);

    const update = () => {
        const data = profile;
        data.photo = profile.photo.uri;
        firestore()
            .collection('users')
            .doc(profile.uid)
            .update(profile)
            .then(() => {
                console.log('success update')
            })
            .catch(err => {
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: '#E06379',
                    color: colors.white
                });
            });
    };

    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value
        })
    };

    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile name="profile.name" desc="profile.profession" photo={profile.photo} isRemove />
                    <Gap height={20} />
                    <Input label="Nomor Karyawan" value={profile.noKaryawan} disable />
                    <Gap height={20} />
                    <Input label="Nama Lengkap" value={profile.name} onChangeText={(value) => changeText('name', value)} />
                    <Gap height={20} />
                    <Input label="Email" value={profile.email} disable />
                    <Gap height={20} />
                    <Input label="Divisi" value={profile.divisi} onChangeText={(value) => changeText('divisi', value)} />
                    <Gap height={20} />
                    <Input label="Posisi Pekerjaan" value={profile.profession} onChangeText={(value) => changeText('profession', value)} />
                    <Gap height={20} />
                    <Input label="Tanggal Lahir" value={profile.bod} disable />
                    <Gap height={40} />
                    <Button title="Save Profile" onPress={update}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default UpdateProfile

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
