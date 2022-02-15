import React,{useState} from "react";
import {View,Text,StyleSheet,Image,Button} from "react-native";
import * as ImagePicker from 'expo-image-picker'

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
          <Image
            source={{uri:pickedImagePath}}
            style={styles.image}
          />
        }
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  button:{
    width:400,
    flexDirection:"row",
    justifyContent:"space-around"
  },
  imageContainer:{
    padding:30
  },
  image:{
    width:400,
    height:300,
    resizeMode:'cover'
  }
})