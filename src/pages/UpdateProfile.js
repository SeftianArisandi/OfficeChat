import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input, Profile } from '../components'
import { colors } from '../utils'

const UpdateProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile name="Shayna Melinda" desc="Product Designer" />
                    <Gap height={20} />
                    <Input label="Nama Lengkap" />
                    <Gap height={20} />
                    <Input label="Email Address" />
                    <Gap height={20} />
                    <Input label="Divisi" />
                    <Gap height={20} />
                    <Input label="Posisi Pekerjaan" />
                    <Gap height={20} />
                    <Input label="Jenis Kelamin" />
                    <Gap height={40} />
                    <Button title="Save Profile" onPress={() => navigation.goBack('UserProfile')}/>
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
