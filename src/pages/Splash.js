import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../assets'
import { colors, fonts, storeData } from '../utils'
import auth from '@react-native-firebase/auth'

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      auth()
        .onAuthStateChanged((user) => {
          if(user){
            // console.log(user.uid);
            storeData('uid', {uid: user.uid});
            navigation.replace('MainApp');
          }else{
            navigation.replace('GetStarted');
          }
        })
    }, 3000)
  }, [])
  
  return (
    <View style={styles.page}>
        <ILLogo/>
        <Text style={styles.title}>Office Chat</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 20,
    fontFamily: fonts.primary[600]
  }
})
