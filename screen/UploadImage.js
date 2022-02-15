import React,{useState} from "react";
import {View,Text,StyleSheet,Image,Button,TouchableOpacity} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function UploadImage(){
  //đường dẫn hình ảnh
const [pickedImagePath,setPickedImagePath] = useState('');

const showImagePicker = async()=>{
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if(permissionResult.granted === false){
    alert("truy cap khong thanh cong")
    return;
  }
  const result = await ImagePicker.launchImageLibraryAsync();
  console.log(result);
  if(!result.cancelled){
    setPickedImagePath(result.uri);
    console.log(result.uri);
  }
}

const openCamera = async()=>{
  const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  if(permissionResult.granted === false){
    alert("khong tai duoc anh len")
    return;
  }
  const result = await ImagePicker.launchCameraAsync();
  console.log(result);
  if(!result.cancelled){
    setPickedImagePath(result.uri);
    console.log(result.uri);
  }
}
const shareImage = async()=>{
  if(!(await Sharing.isAvailableAsync())){
    alert("chia se khong thanh cong");
  }
  await Sharing.shareAsync(pickedImagePath);
}

  return(
    <View style={styles.screen}>
      <View style={styles.button}> 
        <Button
          title="Mở file ảnh"
          onPress={showImagePicker}
        />
        <Button
          title="Mở máy ảnh"
          onPress={openCamera}
        />
      </View>
      <View style={styles.imageContainer}>
        {
          pickedImagePath !=='' && 
          <View style={styles.viewimg}>
            <Image
              source={{uri:pickedImagePath}}
              style={styles.image}
            />
            <Button
              title="Chia sẻ hình ảnh"
              onPress={shareImage}
            />
          </View>
        }
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  screen:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#F0FFFF"
  },
  button:{
    width:400,
    flexDirection:"row",
    justifyContent:"space-around"
  },
  imageContainer:{
    padding:30,
  },
  image:{
    width:400,
    height:300,
    resizeMode:'cover'
  }
})