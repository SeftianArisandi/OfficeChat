import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ILNullPhoto} from '../assets';
import {Button, Gap, Header, Link} from '../components';
import {colors, fonts} from '../utils';

const Profile = () => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
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
      <View style={styles.wrapperButton}>
        <Button title="Edit Profile" />
      </View>
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
    marginTop: 20,
    marginBottom: 30,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'ghostwhite',
  },
  wrapperIconUser: {
    backgroundColor: 'white',
    height: 130,
    width: 130,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 130 / 2,
  },
  iconUser: {
    height: 125,
    width: 125,
  },
  title: {
    fontSize: 16,
  },
  content: {
    fontSize: 19,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  wrapperButton: {
    marginTop: 30,
  },
});
