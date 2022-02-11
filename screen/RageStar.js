import React,{useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AirbnbRating } from 'react-native-elements';

const RageStar = () => {
  const [id,setID] = useState(0);
  const ratingCompleted = (rating: Number) => {
    console.log('Rating is: ' + rating);
    setID(rating)
  };
  const array = [
    "Kém",
    "Yếu",
    "Trung bình",
    "Tốt",
    "Xuất sắc"
   ]
  return (
      <View style={styles.body}>
          <Text style={styles.txt}>Đánh giá</Text>
          {
            (id==1)&&<Image
            style={styles.tinyLogo}
            source={{
              uri: 'http://s1.img.yan.vn/YanNews/2167221/201612/20161207-041334-f68949ce109e6a2601206ce6f4021463-copy_480x480.jpg',
                  }}
              />
          }
          {
            (id==2)&&<Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://hinhanhdep.org/wp-content/uploads/2016/09/mat-buon-khoc.jpeg',
                  }}
              />
          }
          {
            (id==3)&&<Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449__340.png',
                  }}
              />
          }
          {
            (id==4)&&<Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2016/08/21/18/48/emoticon-1610518__340.png',
                  }}
              />
          }
          {
            (id==5)&&<Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2014/04/02/11/05/emoticon-305443__480.png',
                  }}
              />
          }
          <AirbnbRating
              count={5}
              size={30}
              defaultRating={0}
              reviews={array}
              reviewColor="green"
              onFinishRating={ratingCompleted}
          /> 
        </View>
  );
};
const styles = StyleSheet.create({
  tinyLogo: {
    width: 300,
    height: 300,
  },
  body:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#FFFACD"
  },
  txt:{
    fontSize:50,
    fontWeight:'bold',
    marginBottom:30
  }
});
export default RageStar;