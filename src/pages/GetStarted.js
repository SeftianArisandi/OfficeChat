import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../assets'
import { Button, Gap } from '../components';
import { fonts } from '../utils';
import { colors } from '../utils/colors';

const GetStarted = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View>
                <ILLogo />
                <Text style={styles.title}>Berkomunikasi dengan rekan kerja menjadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button title="Get Started" onPress={() => navigation.navigate('Register')} />
                <Gap height={16} />
                <Button title="Sign In" type="secondary" onPress={() => navigation.replace('Login')} />
            </View>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
        padding: 40,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 28,
        marginTop: 90,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    }
})
