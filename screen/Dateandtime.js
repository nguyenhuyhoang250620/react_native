import React, {useState} from 'react';
import {View, Button, Platform,Text,StyleSheet,Image} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Dateandtime = () => {
  const [date, setDate] = useState(new Date(Date.now()));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
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

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Đặt lịch xem phim</Text>
      <Image
        style={styles.img}
        source={{uri:"https://images.pexels.com/photos/1097491/pexels-photo-1097491.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}}
      />
      <View style={styles.dateandtime}>
        <Text style={styles.txt}><Text style={styles.txtSelect}>Ngày:</Text> {date.getDate()}</Text>
        <Text style={styles.txt}><Text style={styles.txtSelect}>Tháng:</Text> {date.getMonth()}</Text>
        <Text style={styles.txt}>Năm{date.getFullYear()}</Text>
      </View>
      <View style={styles.dateandtime}>
        <Text style={styles.txt}>Giờ:{date.getHours()}</Text>
        <Text style={styles.txt}>Phút:{date.getMinutes()}</Text>
      </View>
      <View style={styles.dateandtime}>
        <View style={styles.btn}>
          <Button onPress={showDatepicker} title="hẹn ngày xem phim" />
        </View>
        <View style={styles.btn}>
          <Button onPress={showTimepicker} title="hẹn  giờ xem phim" />
        </View>
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
    
  }
})
export default Dateandtime;