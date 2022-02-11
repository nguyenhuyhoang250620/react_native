import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './screen/Detail'
import HomeScreen from './screen/Home'
import Login from './screen/Login'
import NotificationsScreen from './screen/NotificationsScreen'
import RageStar from './screen/RageStar'
import Async from './screen/Async'
import Call_API from './screen/Call_API'
import Dateandtime from './screen/Dateandtime'
import UploadImage from './screen/UploadImage'
import MaterialTop from './screen/MaterialTop'
import Locations from './screen/Locations'
import MaterialBot from './screen/MaterialBot'
import ViewPager from './screen/example/ViewPager';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
      label="Logout" 
      style={{borderWidth:2}}
      icon={()=>
        <MaterialIcons name="logout" size={24} color="black" style={{position:"absolute",left:10}} />
      }
      onPress={() =>props.navigation.navigate("Login")} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
        drawerStyle:{
          backgroundColor:'white'
        }
    }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="BottomSheet" component={DetailsScreen} />
        <Drawer.Screen name="RageStar" component={RageStar} />
        <Drawer.Screen name="AsyncStorage" component={Async} />
        <Drawer.Screen name="Call_API" component={Call_API} />
        <Drawer.Screen name="Dateandtime" component={Dateandtime} />
        <Drawer.Screen name="UploadImage" component={UploadImage} />
        <Drawer.Screen name="MaterialTop" component={MaterialTop} />
        <Drawer.Screen name="Locations" component={Locations} />
        <Drawer.Screen name="MaterialBot" component={MaterialBot} />
        <Drawer.Screen name="ViewPager" component={ViewPager} />
    </Drawer.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Root'>
        <Stack.Screen
          options={{headerShown: false}}
          name="Root" component={Root} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
