import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import {LogBox } from 'react-native';

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
LogBox.ignoreLogs(['Remote debugger','Reanimated 2']);
import DrawerNavigator from './navigation/DrawerNavigator';

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
    <NavigationContainer>
     <StatusBar style='auto' />
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;

