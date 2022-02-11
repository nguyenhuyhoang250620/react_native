import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

const ViewPager = () => {
  return (
    <View>
        <Text>hoang</Text>
        <PagerView style={styles.pagerView} initialPage={0}>
            <View style={styles.body} key="1">
                <Text>First page</Text>
            </View>
            <View key="2">
                <Text>Second page</Text>
            </View>
        </PagerView>
    </View> 
  );
};

const styles = StyleSheet.create({
  pagerView: {
    width:100,
    height:100,
    backgroundColor:"red"
  },
  body:{
    justifyContent:'center',
    alignItems:"center"
  }
});
export default ViewPager;