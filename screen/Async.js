import React, {useState,useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage' 


const STORAGE_KEY='@save_age'
const STORAGE_NAME='@save_name'
const Async=({navigation})=>{
const [name,setName]= useState('')
const [age,setAge] = useState('')

useEffect(()=>{
  readData()
},[])

const readData= async()=>{
  try{
    const userAge = await AsyncStorage.getItem(STORAGE_KEY)
    const userName = await AsyncStorage.getItem(STORAGE_NAME)
    if(userAge !== null||userName!==null){
      setName(userName)
      setAge(userAge)
    }
  }
  catch(e){
    alert('loi')
  }
}

const saveData = async()=>{
  try{
    await AsyncStorage.setItem(STORAGE_KEY,age)
    await AsyncStorage.setItem(STORAGE_NAME,name)
    setName(name)
    setAge(age)
    alert('Lưu thành công')
  }
  catch(e){
    alert('Lỗi')
  }
}
const clearStorage=async()=>{
  try{
    await AsyncStorage.clear()
    setAge('')
    setName('')
    alert('Xoá thành công')
  }
  catch(e){
    alert('Không xoá được')
  }
}

const onChangeText = userName => setName(userName)
const onChangeAge = userAge => setAge(userAge)
const submit =()=>{
  if(!age||!name) return
  saveData(age,name)
  
}
return(
  <View style={styles.body}>
    <ImageBackground source={{uri:'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}}
      style={styles.img}
    >
      <Text style={styles.age}>Tên của bạn:<Text style={{color:'white'}}> {name}</Text></Text>
      <Text style={styles.age}>Tuổi của bạn:<Text style={{color:'white'}}> {age}</Text></Text>
      <TextInput
        style={styles.text_input}
        value={name}
        placeholder='Username:'
        onChangeText={onChangeText}
      />
      <TextInput
        style={styles.text_input}
        value={age}
        placeholder='Age:'
        onChangeText={onChangeAge}
        keyboardType='number-pad'
      />
      <TouchableOpacity onPress={submit} style={styles.btn}>
        <Text style={styles.text_btn}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={clearStorage} style={styles.btn}>
        <Text style={styles.text_btn}>Delete</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
)
} 
const styles = StyleSheet.create({
  body:{
    flex:1
  },
  age:{
    fontSize:30,
    margin:20
  },
  text_input:{
    textAlign:'center',
    borderWidth:1,
    width:300,
    height:60,
    fontSize:30,
    borderRadius:50,
    backgroundColor:'white',
    color:'black',
    margin:10
  },
  btn:{
    height:50,
    width:200,
    backgroundColor:'#9900FF',
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    borderRadius:20
  },
  text_btn:{
    fontSize:20,
    margin:10,
    color:'white',
    fontWeight:"bold"
  },
  img:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
export default Async;