import React, {useState} from 'react';
import {View, Button, Platform,Text,StyleSheet,Image} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import PagerView from 'react-native-pager-view';

const Dateandtime = () => {
  const [date, setDate] = useState(new Date(Date.now()));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [check,setCheck] = useState(true)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setCheck(false)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const changeEvent=()=>{
    setCheck(true)
  }
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Đặt lịch xem phim</Text>
      <PagerView
        style={styles.pagerView} 
        initialPage={0} 
        pageMargin={2}
        onPageScroll={changeEvent}
      >
            <View key="1">
              <Image
                style={styles.img}
                source={{uri:"https://images.pexels.com/photos/1097491/pexels-photo-1097491.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}}
              />
              <Text style={styles.namefilm}>Horror Island</Text>
            </View>
            <View key="2">
              <Image
                style={styles.img}
                source={{uri:"https://znews-photo.zadn.vn/w480/Uploaded/bzwvopcg/2022_02_07/thumbff.jpg"}}
              />
              <Text style={styles.namefilm}>Avartar</Text>
            </View>
            <View key="3">
              <Image
                style={styles.img}
                source={{uri:"https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2022_02_07/sony_cong_bo_trailer_dau_tien_cho_phim_uncharted_tin_game.jpeg"}}
              />
              <Text style={styles.namefilm}>Bitcoin Mining</Text>
            </View>
            <View key="4">
              <Image
                style={styles.img}
                source={{uri:"https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2022_02_07/fight_club_photofest_still_1_h_2019_0_1.jpeg"}}
              />
              <Text style={styles.namefilm}>Boxing King</Text>
            </View>
            <View key="5">
              <Image
                style={styles.img}
                source={{uri:"https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2022_02_11/jurassic_1.jpg"}}
              />
              <Text style={styles.namefilm}>Tyrannosaurus</Text>  
            </View>
        </PagerView>
      <View style={styles.dateandtime}>
        <View style={{borderWidth:1,borderColor:"white"}}>
          <Text style={styles.txt}><Text style={styles.txtSelect}>Ngày:</Text> {date.getDate()} </Text>
        </View>
        <View style={{borderWidth:1,borderColor:"white"}}>
          <Text style={styles.txt}><Text style={styles.txtSelect}>Tháng:</Text> {date.getMonth()+1} </Text>
        </View>
        <View style={{borderWidth:1,borderColor:"white"}}>
          <Text style={styles.txt}><Text style={styles.txtSelect}>Năm:</Text> {date.getFullYear()} </Text>
        </View>
      </View>
      <View style={styles.dateandtime}>
        <View style={{borderWidth:1,borderColor:"white"}}>
          <Text style={styles.txt}><Text style={styles.txtSelect}>Giờ:</Text> {date.getHours()} </Text>
        </View>
        <View style={{borderWidth:1,borderColor:"white"}}>
          <Text style={styles.txt}><Text style={styles.txtSelect}>Phút:</Text> {date.getMinutes()} </Text>
        </View>    
      </View>
      <View style={styles.dateandtime}>
        <View style={styles.btn}>
          <Button onPress={showDatepicker} title="hẹn ngày xem phim" />
        </View>
        <View style={styles.btn}>
          <Button onPress={showTimepicker} title="hẹn  giờ xem phim" />
        </View>
      </View>
      <View style={styles.btn}>
          <Button 
            onPress={()=>{
              alert("Đặt lịch thành công!")
            }} 
            title="Đặt lịch" 
            disabled={check}
          />
      </View>  
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems:"center",
    backgroundColor:"black"
  },
  body1:{
    backgroundColor:"red"
  },
  img:{
    height:300,
    width:300,
    borderWidth:3,
    borderColor:"white"
  },
  btn:{
    borderWidth:2,
    borderColor:"white",
    margin:5
  },
  title:{
    fontSize:40,
    fontWeight:"bold",
    color:"white",
    margin:15
  },
  txt:{
    color:"white",
    fontSize:20
  },
  txtSelect:{
    color:"red"
  },
  dateandtime:{
    flexDirection:"row",
    marginTop:30
  },
  pagerView: {
    width:300,
    height:350,
    backgroundColor:"black"
  },
  namefilm:{
    fontSize:30,
    textAlign:"center",
    color:"white"
  }
})
export default Dateandtime;