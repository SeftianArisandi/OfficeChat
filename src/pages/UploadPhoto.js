import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../assets'
import { Button, Gap, Header, Link } from '../components'
import { colors, fonts, storeData } from '../utils'
import { launchImageLibrary } from 'react-native-image-picker'
import { showMessage, hideMessage } from "react-native-flash-message"
import firestore from '@react-native-firebase/firestore'

const UploadPhoto = ({navigation, route}) => {
    const {name, profession, uid} = route.params;
    const [photoForDB, setPhotoForDB] = useState('');
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photo, setPhoto] = useState(ILNullPhoto);

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
                setHasPhoto(true);
                console.log(response);
            }
        });
    }

    const uploadAndContinue = () => {
        firestore()
            .collection('users')
            .doc(uid)
            .update({photo: photoForDB});

        const data = route.params;
        data.photo = photoForDB;
        storeData('user', data);
        
        navigation.replace('MainApp');
    }

    return (
        <View style={styles.page}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity onPress={getImage} style={styles.avatarWrapper}>
                        <Image source={photo} style={styles.avatar} />
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
                    </TouchableOpacity>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.job}>{profession}</Text>
                </View>
                <View>
                    <Button title="Upload and Continue" onPress={uploadAndContinue} disable={!hasPhoto} />
                    <Gap height={40} />
                    <Link title="Skip for this" align="center" size={16} onPress={() => navigation.replace('MainApp')} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 40
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2
    },
    addPhoto: {
        position: 'absolute',
        bottom: 4,
        right: 4
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    job: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary
    }
})
