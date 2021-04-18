import React, { useState ,useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, ListMessage } from '../components'
import firestore from '@react-native-firebase/firestore'
import { colors, fonts, getData } from '../utils'

const ChooseUser = ({route, navigation}) => {
    const {category} = route.params;
    const [profile, setProfile] = useState();
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        let mounted = true;
        getData('user').then((response) => {
            if(mounted){
                setProfile(response);
                callUserByCategory(category);
            }
        });
        return () => mounted = false;
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

    if(listUser === 'empty'){
        return (
            <View>
                <Header title={`Divisi ${category}`} onPress={() => navigation.goBack()} type="dark" />
                <Text style={styles.title}>user list is empty</Text>
            </View>
        )
    }else{
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
}

export default ChooseUser

const styles = StyleSheet.create({
    title: {
        paddingTop: 50,
        textAlign: 'center',
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    }
})
