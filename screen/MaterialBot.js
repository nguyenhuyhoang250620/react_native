import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Locations  from './Locations';
import UploadImage from './UploadImage';

const Tab = createMaterialBottomTabNavigator();

export default function MaterialBot() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Locations" component={Locations} />
        <Tab.Screen name="UploadImage" component={UploadImage} />
      </Tab.Navigator>
  );
}