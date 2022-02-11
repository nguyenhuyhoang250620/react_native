import React, { useState } from 'react';
import { BottomSheet, Button, ListItem,Text,View,Image } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type BottomSheetComponentProps ={};

const BottomSheetComponent:React.FunctionComponent<BottomSheetComponentProps>=()=>{
  const [isVisiable,setIsvisiable] = useState(false);
  const [data,setData] = useState();
  const [age,setAge] = useState();
  const [img,setImg] = useState();
  const [des,setDes] = useState();
  const [id,setID] = useState(0);
  const [color,setColor] = useState('white');
  const showData=()=>{
    const obj = JSON.stringify(list[id])
    const obj_show = JSON.parse(obj)
    if(id<5){
      setID(id+1)
    }
    else{
      setID(0)
    }
    setData(obj_show.title);
    setAge(obj_show.age);
    setImg(obj_show.img);
    setDes(obj_show.description);  
  }

  

  const list = [
    {title: 'Jeff Bezos',
      age:'Age:57',
      img:'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__480.png',
      description:'a',
      containerStyle: { backgroundColor: color }
    },
    {title: 'Bill Gates',
    age:'Age:64',
    img:'https://cdn.pixabay.com/photo/2021/11/24/08/46/bill-gates-6820567__340.png',
    description:'a',
    },
    {title: 'Bernard Arnault',
    age:'Age:71',
    img:'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__480.png',
    description:'a',
    },
    {title: 'Warren Buffett',
    age:'Age:89',
    img:'https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825__340.png',
    description:'a',
    },
    {title: 'Larry Ellison',
    age:'Age:75',
    img:'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png',
    description:'a',
    },
    {title: 'Amancio Ortega',
    age:'Age:84',
    img:'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__480.png',
    description:'a',
    },
    {
      title: 'Show',
      containerStyle: { backgroundColor: 'blue' },
      titleStyle: { color: 'white' },
      onPress: () => showData(),
    },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsvisiable(false),
    },
  ];
  return(
    <SafeAreaProvider style={styles.body}>
      <Button
        title="Danh sách người người giàu"
        onPress={() => setIsvisiable(true)}
        buttonStyle={styles.button}
      />
        <Text style={styles.txt}>{data}</Text>
        <Image
          source={{uri:img}}
          style={styles.img}
        />
        <Text style={styles.age}>{age}</Text> 
       <BottomSheet modalProps={{}} isVisible={isVisiable}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>
                {l.title}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems:'center'
  },
  button: {
    margin: 10,
    width:400
  },
  img:{
    height:250,
    width:250,
    borderRadius:50
  },
  txt:{
    fontSize:30,
    textAlign:'center'
  },
  age:{
    fontSize:20,
    position:'absolute',
    top:400,
    left:10
  },
  des:{
    fontSize:10
  }
});
export default BottomSheetComponent;