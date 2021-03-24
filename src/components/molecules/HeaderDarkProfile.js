import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser } from '../../assets'
import { colors, fonts } from '../../utils'
import { Button } from '../atoms'

const HeaderDarkProfile = ({onPress}) => {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="back-light" onPress={onPress} />
            <View style={styles.content}>
                <Text style={styles.name}>Seftian Arisandi</Text>
                <Text style={styles.jobPosition}>IT Manager</Text>
            </View>
            <Image source={DummyUser} style={styles.avatar} />
        </View>
    )
}

export default HeaderDarkProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingVertical: 20,
        paddingLeft: 20,
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white
    },
    jobPosition: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.text.subTitle,
        marginTop: 5
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2
    }
})
