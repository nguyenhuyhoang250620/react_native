import React,{useEffect, useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';



export default function Home() {


    const [sound,setSound] = useState();


    const playSound = async()=>{
        const {sound} = await Audio.Sound.createAsync(
            require('./assets/A.mp3')
        )
        setSound(sound);
        await sound.playAsync(); 
    }
    const playSounda = async()=>{
        setColor('#FF00FF')
        const {sound} = await Audio.Sound.createAsync(
            require('./assets/B.mp3')
        )
        setSound(sound);
        await sound.playAsync(); 
    }

    useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);

  return (
    <View> 
        <View style={styles.boxa}>
            <TouchableOpacity style={styles.box}
            onPress={playSound}
            >
                <Text>A</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text>B</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text></Text>
            </TouchableOpacity>
        </View>
        <View style={styles.boxa}>
            <TouchableOpacity style={styles.box}>
                <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text></Text>
            </TouchableOpacity>
        </View>
        <View style={styles.boxa}>
            <TouchableOpacity style={styles.box}>
                <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text></Text>
            </TouchableOpacity>
        </View>
        <View style={styles.boxa}>
            <TouchableOpacity style={styles.box}>
                <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text></Text>
            </TouchableOpacity>
        </View>
        <View style={styles.boxa}>
            <TouchableOpacity style={styles.box}>
                <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text></Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    box:{
        borderWidth:1,
        height:100,
        width:100,
        margin:10,
        backgroundColor:'#FF00FF',
        alignItems:"center",
        justifyContent:"center"
    },
    boxa:{
        flexDirection:"row",
    }
});