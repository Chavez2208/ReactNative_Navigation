import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavPersonalizado from './src/navigators/DrawerNavPersonalizado';
// import { StackNavigator } from './src/navigators/StackNavigator';
// import { DrawerNavigationMenu } from './src/navigators/DrawerNavigationMenu';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <DrawerNavigationMenu /> */}
      <DrawerNavPersonalizado />
    </NavigationContainer>

  );
};

export default App