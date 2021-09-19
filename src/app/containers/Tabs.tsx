import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  OfferScreen,
  SearchScreen,
  ProfileScreen,
  GetirScreen,
  GetirYemekScreen,
  GetirBuyukScreen,
  GetirCarsiScreen,
} from '../screens';
import {COLOR} from '../globalStyles';
import {TabBar} from '../components';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const GetirStack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

const GetirStackScreen = () => {
  return (
    <GetirStack.Navigator
      initialRouteName="getir-screen"
      screenOptions={{headerShown: false}}>
      <GetirStack.Screen name="getir-screen" component={GetirScreen} />
      <GetirStack.Screen
        name="getir-yemek-screen"
        component={GetirYemekScreen}
      />
      <GetirStack.Screen
        name="getir-buyuk-screen"
        component={GetirBuyukScreen}
      />
      <GetirStack.Screen
        name="getir-carsi-screen"
        component={GetirCarsiScreen}
      />
    </GetirStack.Navigator>
  );
};

const TabStackScreen = () => {
  return (
    <TabStack.Navigator
      initialRouteName="home-screen"
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerStyle: {backgroundColor: COLOR.primary},
        headerTintColor: 'white',
      }}>
      <TabStack.Screen
        name="home-screen"
        component={HomeScreen}
        options={{headerTitle: 'getirBüyük'}}
      />
      <TabStack.Screen
        name="search-screen"
        component={SearchScreen}
        options={{headerTitle: 'Arama'}}
      />
      <TabStack.Screen
        name="getir-stack"
        component={GetirStackScreen}
        options={{headerTitle: 'GetirStack'}}
      />
      <TabStack.Screen
        name="profile-screen"
        component={ProfileScreen}
        options={{headerTitle: 'Profil'}}
      />
      <TabStack.Screen
        name="offer-screen"
        component={OfferScreen}
        options={{headerTitle: 'getirBüyük'}}
      />
    </TabStack.Navigator>
  );
};

export default TabStackScreen;
