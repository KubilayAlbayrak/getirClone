import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabStack} from './containers';

const App = () => {
  return (
    <NavigationContainer>
      <TabStack />
    </NavigationContainer>
  );
};

export default App;
