import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
LogBox.ignoreLogs(['Remote debugger', 'Reanimated 2']);
import DrawerNavigator from './navigation/DrawerNavigator';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mealReducer from './store/reducers/mealReducer';

const store = createStore(combineReducers({ mealState: mealReducer }), composeWithDevTools());

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(null);

  useEffect(() => {
    const fetchFont = async () => {
      await Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      });
      setFontLoaded(true);
    };
    fetchFont();
  }, []);

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style='auto' />
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
