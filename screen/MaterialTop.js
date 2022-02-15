import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './Material_Top/Home'
import SettingsScreen from './Material_Top/Setting';
import DetailScreen from './Material_Top/Detail';

const Tab = createMaterialTopTabNavigator();

export default function MaterialTop() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="DetailScreen" component={DetailScreen} />
      </Tab.Navigator>
  );
}