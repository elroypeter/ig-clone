/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import VideoScreen from '../screens/VideoScreen';
import SearchScreen from '../screens/SearchScreen';
import ShopScreen from '../screens/ShopScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const IconMap: any = {
  Home: 'home',
  Video: 'video',
  Search: 'search',
  Shop: 'shopping-bag',
  Profile: 'user',
};

const HomeScreenHeader = ({}: any) => {
  return (
    <View style={[styles.stackHeaderContainer]}>
      <Image
        style={[styles.stackHeaderLogo]}
        source={require('../assets/images/ig-logo.png')}
      />

      <TouchableOpacity style={[styles.stackHeaderRight]}>
        <Icon name="tv" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={() => {
          return {
            header: props => <HomeScreenHeader {...props} />,
            headerMode: 'screen',
          };
        }}
        name="HomeStack"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

const TabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={[styles.tabBarContainer]}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabButton]}>
            <Icon
              name={IconMap[route.name]}
              size={24}
              color="#000"
              style={{color: isFocused ? '#673ab7' : '#222'}}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabsNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        paddingTop: getSafeAreaInset(insets, 'top'),
      }}
      screenOptions={{headerShown: false}}
      initialRouteName="Home"
      tabBar={(props: any) => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Video" component={VideoScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const getSafeAreaInset = (insets: any, position: any) => {
  if (insets[position]) {
    return insets[position];
  }
  return 0;
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
    paddingBottom: 30,
  },
  tabSafeArea: {},
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  stackHeaderContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 10,
  },
  stackHeaderLogo: {
    width: 128,
    height: 37,
  },
  stackHeaderRight: {
    marginLeft: 'auto',
  },
});

export default TabsNavigator;
