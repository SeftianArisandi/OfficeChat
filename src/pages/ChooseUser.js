import React, { useState ,useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, ListMessage } from '../components'
import firestore from '@react-native-firebase/firestore'
import { getData } from '../utils'

const ChooseUser = ({route, navigation}) => {
    const {category} = route.params;
    const [profile, setProfile] = useState();
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        getData('user').then((response) => {
            setProfile(response);
            callUserByCategory(category);
        });
    }, []);

    const callUserByCategory = (category) => {
        firestore()
            .collection('users')
            .where('divisi', '==', category)
            .get()
            .then((success) => {
                if(success.docs.length < 1){
                    setListUser('empty');
                }
                setListUser(success.docs);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <View>
            <Header title={`Divisi ${category}`} onPress={() => navigation.goBack()} type="dark" />
            {
                listUser && listUser.map((user, id) => {
                if(user._data.uid != profile.uid){
                    return <ListMessage key={id} onPress={() => navigation.navigate('Chatting', user._data)} type="next" profile={{uri: user._data.photo}} name={user._data.name} desc={user._data.profession} />;
                }})
            }
        </View>
    )
}

export default ChooseUser

const styles = StyleSheet.create({})
