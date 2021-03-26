import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input } from '../components'
import { colors } from '../utils/colors'

const Register = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title="Register" />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input label="Nomor Karyawan" />
                    <Gap height={20} />
                    <Input label="Nama Lengkap" />
                    <Gap height={20} />
                    <Input label="Jenis Kelamin" />
                    <Gap height={20} />
                    <Input label="Tanggal Lahir" />
                    <Gap height={20} />
                    <Input label="Divisi" />
                    <Gap height={20} />
                    <Input label="Posisi Pekerjaan" />
                    <Gap height={20} />
                    <Input label="Email Address" />
                    <Gap height={20} />
                    <Input label="Password" />
                    <Gap height={30} />
                    <Button title="Continue" onPress={() => navigation.navigate('UploadPhoto')} />
                    <Gap height={60} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Register

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
