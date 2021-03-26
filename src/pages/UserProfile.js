import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, DataProfile, Gap, Header, Profile } from '../components'
import { colors } from '../utils'

const UserProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Profile" onPress={() => navigation.goBack()}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Gap height={10} />
                    <Profile name="Shayna Melinda" desc="Product Designer" />
                    <Gap height={25} />
                    <DataProfile dataName="Nomor Karyawan" dataValue="00280182" />
                    <DataProfile dataName="Email Address" dataValue="shaynamelinda@gmail.com" />
                    <DataProfile dataName="Divisi" dataValue="Produksi" />
                    <DataProfile dataName="Tanggal Lahir" dataValue="18 Maret 1992" />
                    <DataProfile dataName="Jenis Kelamin" dataValue="Wanita" />
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
