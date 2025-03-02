import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import FlashMessage from "react-native-flash-message";
import { Provider, useSelector } from 'react-redux';
import { LogBox } from 'react-native';
import store from './redux/store';
import { Loading } from './components';

const MainApp = () => {
  const stateGlobal = useSelector(state => state);
  return (
    <>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading && <Loading />}
    </>
  )
}

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']);
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App
