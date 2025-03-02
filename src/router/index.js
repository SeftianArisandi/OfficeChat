import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GetStarted, Login, Register, Splash, UploadPhoto, Home, Messages, News, Profile, ProfileEdit, ChooseUser, Chatting, UserProfile, UpdateProfile, NewsDetail } from '../pages';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Messages" component={Messages} />
            <Tab.Screen name="News" component={News} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{headerShown: false}} />
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
            <Stack.Screen name="ProfileEdit" component={ProfileEdit} options={{headerShown: false}} />
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
            <Stack.Screen name="ChooseUser" component={ChooseUser} options={{headerShown: false}} />
            <Stack.Screen name="Chatting" component={Chatting} options={{headerShown: false}} />
            <Stack.Screen name="UserProfile" component={UserProfile} options={{headerShown: false}} />
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{headerShown: false}} />
            <Stack.Screen name="NewsDetail" component={NewsDetail} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router;
