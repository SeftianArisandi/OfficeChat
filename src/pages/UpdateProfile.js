import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input, Profile } from '../components'
import { colors, getData, storeData } from '../utils'
import { showMessage, hideMessage } from "react-native-flash-message"
import { launchImageLibrary } from 'react-native-image-picker'
import { ILNullPhoto } from '../assets'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

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
    const [photo, setPhoto] = useState(ILNullPhoto);
    const [photoForDB, setPhotoForDB] = useState('');

    useEffect(() => {
        getData('uid').then((getuid) => {
            getData('user').then((response) => {
                const data = response;
                setPhoto({uri: response.photo});
                data.uid = getuid.uid;
                setProfile(data);
                // storeData('user', data);
            });
        })
    }, []);

    const update = () => {
        if(password.length > 0){
            if(password.length < 6){
                showMessage({
                    message: 'Password kurang dari 6 karakter',
                    type: 'default',
                    backgroundColor: '#E06379',
                    color: colors.white
                });
            }else{
                updatePassword();
                updateProfileData();
                setTimeout(() => {
                    navigation.replace('MainApp');
                }, 2000);
            }
        }else{
            updateProfileData();
            setTimeout(() => {
                navigation.replace('MainApp');
            }, 2000);
        }
    };

    const updatePassword = () => {
        auth()
            .onAuthStateChanged((user) => {
                if(user){
                    user.updatePassword(password)
                    .catch(err => {
                        console.log(err);
                    });
                }
            });
    };

    const updateProfileData = () => {
        const data = profile;
        if(photoForDB){
            data.photo = photoForDB;
        }
        firestore()
            .collection('users')
            .doc(profile.uid)
            .update(profile)
            .then(() => {
                console.log('success update: ', data);
                storeData('user', data);
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

    const getImage = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: true,
            quality: 0.5,
            maxWidth: 200,
            maxHeight: 200
        };
        launchImageLibrary(options, (response) => {
            if (response.didCancel || response.error) {
                showMessage({
                    message: 'oops, sepertinya anda tidak memilih fotonya ?',
                    type: 'default',
                    backgroundColor: '#E06379',
                    color: colors.white
                });
            } else {
                setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
                setPhoto({uri: response.uri});
                console.log(response);
            }
        });
    };

    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile photo={photo} onPress={getImage} isRemove />
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
                    <Gap height={20} />
                    <Input label="Password" value={password} onChangeText={(value) => setPassword(value)} secureTextEntry />
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
