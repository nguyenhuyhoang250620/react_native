import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UploadImage=()=>{
  const [image,setImage] =useState(null);
  const pickImage = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect:[1,1],
      quality:1,
    })
    console.log(result);
  if(!result.cancelled){
    setImage(result.uri)
  }
  };
  return(
    <View style={{
      flex:1,
      justifyContent:'center'
    }}>
      <Button 
        title='upload file'
        onPress={pickImage}
      />
      {image && 
      <Image
        source={{uri:image}}
        style={{height:300,width:300}}
      />
      }
    </View>
  )
}
export default UploadImage;
