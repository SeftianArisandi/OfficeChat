import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input, Profile } from '../components'
import { colors, getData, showError, storeData } from '../utils'
import { launchImageLibrary } from 'react-native-image-picker'
import { ILNullPhoto } from '../assets'
import { useDispatch } from 'react-redux';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

const UpdateProfile = ({navigation}) => {
    const dispatch = useDispatch();

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
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState(ILNullPhoto);
    const [photoForDB, setPhotoForDB] = useState('');

    const testLoading = () => {
        dispatch({type: 'SET_LOADING', value: true});
        setTimeout(() => {
            dispatch({type: 'SET_LOADING', value: false});
        }, 2000)
    }

    useEffect(() => {
        getData('user').then((response) => {
            const data = response;
            data.photo = {uri: response.photo};
            setProfile(response);
            setPhoto(data.photo);
        });
    }, []);

    const update = () => {
        dispatch({type: 'SET_LOADING', value: true});
        if(password.length > 0){
            if(password.length < 6){
                dispatch({type: 'SET_LOADING', value: false});
                showError('Password kurang dari 6 karakter');
            }else{
                updatePassword();
                updateProfileData();
                setTimeout(() => {
                    dispatch({type: 'SET_LOADING', value: false});
                    navigation.replace('MainApp');
                }, 2000);
            }
        }else{
            updateProfileData();
            setTimeout(() => {
                dispatch({type: 'SET_LOADING', value: false});
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
                        // console.log(err);
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
            .update(data)
            .then(() => {
                storeData('user', data);
            })
            .catch(err => {
                showError(err.message);
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
                showError('oops, sepertinya anda tidak memilih fotonya ?');
            } else {
                setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
                setPhoto({uri: response.uri});
            }
        });
    };

    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.navigate('UserProfile')} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile photo={photo} onPress={getImage} isRemove />
                    <Gap height={20} />
                    <Input label="Nomor Karyawan" value={profile.noKaryawan} disable />
                    <Gap height={20} />
                    <Input label="Nama Lengkap" value={profile.name} onChangeText={(value) => changeText('name', value)} />
                    <Gap height={20} />
                    <Input label="Alamat Email" value={profile.email} disable />
                    <Gap height={20} />
                    <Input label="Divisi" value={profile.divisi} onChangeText={(value) => changeText('divisi', value)} />
                    <Gap height={20} />
                    <Input label="Posisi Pekerjaan" value={profile.profession} onChangeText={(value) => changeText('profession', value)} />
                    <Gap height={20} />
                    <Input label="Tanggal Lahir" value={profile.bod} disable />
                    <Gap height={20} />
                    <Input label="New Password" value={password} onChangeText={(value) => setPassword(value)} secureTextEntry />
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
