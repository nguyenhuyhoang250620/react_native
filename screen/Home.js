import * as React from 'react';
import { Button, View,Text,StyleSheet,ScrollView,Image} from 'react-native';


export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.body}>
        <Text style={styles.text_W}>Welcome to Learn React Native</Text>
        <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} style={styles.img} />
        <Text style={styles.text_Body}>
          {"        "}1.React native là một công cụ giúp chúng ta lập trình đa nền tảng để tạo ra các ứng dụng trên môi trường native. Nó là một framework mã nguồn mở được phát triển bởi Facebook, cho phép bạn sử dụng Java script để phát triển phần mềm trên điện thoại di động Android và IOS
        </Text>
        <Text style={styles.text_Body}>
          {"        "}2.Components là một khái niệm cơ bản của cả React và React native. Chính việc chia nhỏ ứng dụng thành các components nhỏ tạo nên tính tái sử dụng cao và khả năng mở rộng của chúng. Hãy thử phân tích một ví dụ đơn giản trước.
        </Text>
        <Text style={styles.text_Body}>
          {"        "}3.Props là viết tắt của Properties. Một điều mà bạn cần phải nhớ khi sử dụng props đó là không bao giờ nên thay đổi giá trị của nó, hay nói cách khác, đây là một dữ liệu immutable.
        </Text>
        <Text style={styles.text_Body}>
          {"        "}4.State thì hoạt động khác với Props. State là dữ liệu nội bộ của một Component, trong khi props là dữ liệu được truyền cho Component. Chính vì vậy chúng ta hoàn toàn có thể thay đổi state, và coi nó là một kiểu dữ liệu mutable. Vì đặc điểm này nên chúng ta hay sử dụng State để thay đổi dữ liệu của view, binding data lại view khi có thay đổi. Nhưng chúng ta không dùng this.state để gán lại giá trị thay đổi cho nó, mà chúng ta sẽ dùng this.setState. Function này sẽ trigger cho class rằng hãy render lại component và các component con của nó, còn this.state thì không.
        </Text>
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems:"center",
    backgroundColor:"#303030"
  },
  text_W:{
    fontSize:40,
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
  },
  img:{
    height:100,
    width:100
  },
  text_Body:{
    fontSize:15,
    color:'white',
    margin:15,
    lineHeight:20,
  }
})