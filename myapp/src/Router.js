import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.screen name="ProductsPage" component={Products} />
        <Stack.screen name="DetailPage" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
