import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, TextInput} from 'react-native';
import {Button, Header} from '../components';

const ProfileEdit = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Edit Profile"
        onPress={() => navigation.goBack('Profile')}
      />

      <ScrollView style={styles.wrapperContent}>
        <View style={{flex: 1}}>
          <View>
            <TextInput placeholder="Full Name" style={styles.textInput} />
          </View>
          <View>
            <TextInput placeholder="Job Position" style={styles.textInput} />
          </View>
          <View>
            <TextInput placeholder="Emal Address" style={styles.textInput} />
          </View>
          <View>
            <TextInput placeholder="Password" style={styles.textInput} />
          </View>
          <View style={styles.selectContent}>
            <RNPickerSelect
              onValueChange={value => console.log(value)}
              items={[
                {label: 'Manager', value: 'manager'},
                {label: 'Directur', value: 'directur'},
                {label: 'Supervisor', value: 'supervisor'},
              ]}
            />
          </View>
        </View>
        <View style={styles.wrapperTextInput}>
          <View style={{width: 150}}>
            <Button
              title="Save Profile"
              onPress={() => alert('this is button')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperContent: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
    backgroundColor: 'ghostwhite',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  wrapperTextInput: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 50,
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'ghostwhite',
    marginBottom: 15,
  },
});
