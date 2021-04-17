import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, DataProfile, Gap, Header, Profile } from '../components'
import { colors, getData, showError } from '../utils'
import auth from '@react-native-firebase/auth';

const UserProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        noKaryawan: '',
        name: '',
        gender: '',
        bod: '',
        divisi: '',
        profession: '',
        email: '',
        uid: '',
        photo: '',
    });

    useEffect(() => {
        getData('user').then((response) => {
            const data = response;
            data.photo = {uri: response.photo};
            setProfile(response);
        });
    }, []);

    const signOut = () => {
        auth()
            .signOut()
            .then(() => {
                navigation.replace('GetStarted');
            })
            .catch((err) => {
                showError(err.message)
            })
    };

    return (
        <View style={styles.page}>
            <Header title="Profile" onPress={() => navigation.navigate('MainApp')}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Gap height={10} />
                    {profile.name.length > 0 && <Profile name={profile.name} desc={profile.profession} photo={profile.photo} />}
                    <Gap height={25} />
                    <DataProfile dataName="Nomor Karyawan" dataValue={profile.noKaryawan} />
                    <DataProfile dataName="Alamat Email" dataValue={profile.email} />
                    <DataProfile dataName="Bahasa" dataValue={profile.language === 'id' ? 'Indonesia': 'English'} />
                    <DataProfile dataName="Divisi" dataValue={profile.divisi} />
                    <DataProfile dataName="Tanggal Lahir" dataValue={profile.bod} />
                    <DataProfile dataName="Jenis Kelamin" dataValue={profile.gender} />
                    <Gap height={20} />
                    <Button title="Edit Profile" onPress={() => navigation.replace('UpdateProfile')}/>
                    <Gap height={20} />
                    <Button title="Sign Out" onPress={signOut}/>
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
