import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavPersonalizado from './src/navigators/DrawerNavPersonalizado';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavPersonalizado />
    </NavigationContainer>

  );
};

export default App