import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconRemovePhoto } from '../../assets'
import { colors, fonts } from '../../utils'

const Profile = ({name, desc, isRemove, photo, onPress}) => {
    return (
        <View style={styles.container}>
        {!isRemove && (
            <View style={styles.borderProfile}>
                <Image source={photo} style={styles.avatar} />
            </View>
        )}
        {isRemove && (
            <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
                <Image source={photo} style={styles.avatar} />
                {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
            </TouchableOpacity>
        )}

            {name && (
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.jobPosition}>{desc}</Text>
                    </View>
            )}
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderProfile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2
    },
    removePhoto: {
        position: 'absolute',
        right: 4,
        bottom: 4
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 16,
        textAlign: 'center'
    },
    jobPosition: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginTop: 2,
        textAlign: 'center'
    }
})
