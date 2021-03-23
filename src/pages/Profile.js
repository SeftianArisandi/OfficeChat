import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import {ILNullPhoto} from '../assets';
import {Button, Header, Link} from '../components';
import {colors, fonts} from '../utils';

const Profile = ({navigation}) => {
  const handleGoto = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.user}>
          <View style={styles.wrapperIconUser}>
            <Image source={ILNullPhoto} style={styles.iconUser} />
          </View>
        </View>
        <View style={{marginHorizontal: 15}}>
          <View>
            <Text style={styles.title}>Full Name : </Text>
            <Text style={styles.content}>Syaiful Nurrahman</Text>
          </View>
          <View>
            <Text style={styles.title}>Job Position : </Text>
            <Text style={styles.content}>Lead Management</Text>
          </View>
          <View>
            <Text style={styles.title}>Email Address : </Text>
            <Text style={styles.content}>SyaifulNurrahman@gmail.com</Text>
          </View>
          <View>
            <Text style={styles.title}>Division : </Text>
            <Text style={styles.content}>Management</Text>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 15}}>
          <View style={{width: 150}}>
            <Button
              title="Edit Profile"
              onPress={() => handleGoto('ProfileEdit')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'ghostwhite',
  },
  user: {
    marginTop: 5,
    marginBottom: 7,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'ghostwhite',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  wrapperIconUser: {
    backgroundColor: 'white',
    height: 110,
    width: 110,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 110 / 2,
  },
  iconUser: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
  },
  content: {
    fontSize: 15,
    fontFamily: fonts.primary[700],
    paddingBottom: 10,
  },
});
