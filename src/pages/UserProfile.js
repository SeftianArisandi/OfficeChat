import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, DataProfile, Gap, Header, Profile } from '../components'
import { colors, getData, storeData } from '../utils'
import firestore from '@react-native-firebase/firestore'

const UserProfile = ({navigation}) => {
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
    return (
        <View style={styles.page}>
            <Header title="Profile" onPress={() => navigation.goBack()}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Gap height={10} />
                    {profile.name.length > 0 && <Profile name={profile.name} desc={profile.profession} photo={profile.photo} />}
                    <Gap height={25} />
                    <DataProfile dataName="Nomor Karyawan" dataValue={profile.noKaryawan} />
                    <DataProfile dataName="Email Address" dataValue={profile.email} />
                    <DataProfile dataName="Divisi" dataValue={profile.divisi} />
                    <DataProfile dataName="Tanggal Lahir" dataValue={profile.bod} />
                    <DataProfile dataName="Jenis Kelamin" dataValue={profile.gender} />
                    <Gap height={20} />
                    <Button title="Edit Profile" onPress={() => navigation.navigate('UpdateProfile')}/>
                    <Gap height={30} />
                </View>
            </ScrollView>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        paddingHorizontal: 40
    }
})
