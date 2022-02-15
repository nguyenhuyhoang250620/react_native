import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,RefreshControl,Image,StyleSheet,ScrollView } from 'react-native';

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 2;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

export default Call_API = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [get, setGet] = useState('');
  const [Refreshing, setRefreshing] = useState(false);
  const [page,setPage] = useState(1);
  
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
        try {
          setLoading(true);
          const response = await fetch('http://192.168.1.96:3000/products/'+page);
          const json = await response.json();
          console.log(json.total)
          json.response.map((item, index) => (
            data.push(item)
          ))  
          setData(data)
          console.log(data)
          if (page<= json.total) {
            setPage(page+1)
          } 
        } 
        catch (error) {
          console.error(error);
        } 
        finally {
          setTimeout(() => {
            setLoading(false);
          }, 1000); 
        }
  }

  const onRefresh = () => {
    console.log(page)
    setRefreshing(true);
    getMovies();
    setRefreshing(false);  
  }

  

 
  const renderItem =({item})=>{
     return(
        <View style={styles.body}>
          <Text style={styles.title}>
          {item.id}.
          {item.name}
        </Text>
        <Image
          source={{uri:item.image,}}
          style={{height:200,width:200}}
        />
        </View>
        )
  }
<ActivityIndicator size="large" color="red" />
  return (
    <View style={{ flex: 1, padding: 24,backgroundColor:'#330000' }}>
              {isLoading ? (
                <ActivityIndicator
                  size="large" color="white"
                  visible={isLoading}
                />
              ) : (
                <FlatList
                  horizontal
                  data={data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderItem}
                  refreshControl={
                    <RefreshControl
                      onRefresh={onRefresh}
                      refreshing={Refreshing}
                      colors={['#ff00ff']}
                  />
                  }
                />
                // <ScrollView
                //   onScroll={({nativeEvent})=>{
                //     if(isCloseToBottom(nativeEvent)){
                //       getMovies()
                //     }
                //   }}
                // >
                //   {data.map((item, index) => (
                //     <View key={index} style={styles.body}>
                //         <Text style={styles.title}>
                //           {item.id}.
                //           {item.name}
                //         </Text>
                //         <Image
                //           source={{uri:item.image,}}
                //           style={{height:200,width:200}}
                //         />
                //     </View>
                //   ))}
                // </ScrollView>
              )}    
    </View>
  );
};
const styles = StyleSheet.create({
  body:{
    backgroundColor:'#CCFFFF',
    padding:30,
    borderRadius:20,
    margin:10
  },
  title:{
    fontSize:30,
    color:'black',
    marginBottom:10
  }
})