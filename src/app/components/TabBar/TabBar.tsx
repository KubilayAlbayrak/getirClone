import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FeatherICon from 'react-native-vector-icons/Feather';
import {COLOR} from '../../globalStyles';
import {GetirModal} from '../../components';

const TabBar = ({state, descriptors, navigation}) => {
  const [getirBottomTabBarModalVisible, setGetirBottomTabBarModalVisible] =
    useState(false);

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (event.target.includes('getir-stack')) {
            setGetirBottomTabBarModalVisible(true);
          } else if (!event.target.includes('getir-stack')) {
            setGetirBottomTabBarModalVisible(false);
          }

          if (!isFocused && !event.defaultPrevented) {
            if (route.name === 'home-screen') {
              navigation.navigate('home-screen');
            }
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const generateTabBarIcons = () => {
          if (route.name === 'home-screen') {
            if (isFocused) {
              return (
                <View style={styles.tabBarIconViewFocused}>
                  <FeatherICon name="home" size={30} color="#4B3397" />
                </View>
              );
            } else {
              return (
                <View style={styles.tabBarIconView}>
                  <FeatherICon name="home" size={30} color="#89929A" />
                </View>
              );
            }
          } else if (route.name === 'search-screen') {
            if (isFocused) {
              return (
                <View style={styles.tabBarIconViewFocused}>
                  <FeatherICon name="search" size={30} color="#4B3397" />
                </View>
              );
            } else {
              return (
                <View style={styles.tabBarIconView}>
                  <FeatherICon name="search" size={30} color="#89929A" />
                </View>
              );
            }
          } else if (route.name === 'getir-stack') {
            if (isFocused) {
              return (
                <>
                  <GetirModal
                    modalVisibility={getirBottomTabBarModalVisible}
                    modalVisibilitySetter={setGetirBottomTabBarModalVisible}
                  />
                  <View style={styles.tabBarModalIconView}>
                    <FeatherICon
                      name="arrow-right-circle"
                      size={30}
                      color="#4B3397"
                    />
                  </View>
                </>
              );
            } else {
              return (
                <View style={styles.tabBarModalIconView}>
                  <FeatherICon
                    name="arrow-right-circle"
                    size={30}
                    color="#89929A"
                  />
                </View>
              );
            }
          } else if (route.name === 'profile-screen') {
            if (isFocused) {
              return (
                <View style={styles.tabBarIconViewFocused}>
                  <FeatherICon name="user" size={30} color="#4B3397" />
                </View>
              );
            } else {
              return (
                <View style={styles.tabBarIconView}>
                  <FeatherICon name="user" size={30} color="#89929A" />
                </View>
              );
            }
          } else if (route.name === 'offer-screen') {
            if (isFocused) {
              return (
                <View style={styles.tabBarIconViewFocused}>
                  <FeatherICon name="gift" size={30} color="#4B3397" />
                </View>
              );
            } else {
              return (
                <View style={styles.tabBarIconView}>
                  <FeatherICon name="gift" size={30} color="#89929A" />
                </View>
              );
            }
          }
        };
        return (
          <>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabBarElement}>
              {generateTabBarIcons()}
            </TouchableOpacity>
          </>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: hp(10),
    backgroundColor: 'white',
  },
  tabBarElement: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabBarIconView: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: hp(1),
    position: 'absolute',
    bottom: hp(3),
  },
  tabBarIconViewFocused: {
    flex: 1,
    position: 'absolute',
    bottom: hp(3),
    borderBottomColor: COLOR.secondary,
    borderBottomWidth: 4,
    paddingBottom: hp(1),
  },
  tabBarModalIconView: {
    position: 'absolute',
    bottom: hp(4),
    height: hp(9),
    width: hp(9),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(100),
    backgroundColor: 'white',
    shadowColor: COLOR.lightGray,
    shadowOpacity: 0.3,
  },
});
