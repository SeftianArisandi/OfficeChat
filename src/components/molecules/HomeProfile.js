import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ILNullPhoto } from '../../assets'
import { colors, fonts, getData } from '../../utils'

const HomeProfile = ({onPress}) => {
    const [profile, setProfile] = useState({
        photo: ILNullPhoto,
        name: '',
        profession: ''
    });

    useEffect(() => {
        getData('user').then((response) => {
            const data = response;
            data.photo = {uri: response.photo};
            setProfile(response);
        });
    }, []);
    
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile.photo} style={styles.avatar} />
            <View>
                <Text style={styles.name}>{profile.name}</Text>
                <Text style={styles.jobPosition}>{profile.profession}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        textTransform: 'capitalize'
    },
    jobPosition: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        textTransform: 'capitalize'
    }
})
