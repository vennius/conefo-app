import { useState } from "react";
import { Text, View, TouchableOpacity, Image, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import StudentModal from "./StudentModal";

function StudentCard({data}){
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  
  
  return (
  
    <TouchableOpacity style={{
      width: "90%",
      height: 60,
      //backgroundColor: "rgba(0,204,255,0.3)",
      marginTop: 20,
      //borderRadius: 10,
      alignItems: "center",
      flexDirection: "row",
      borderBottomWidth: 2,
      borderBottomColor: "black"
    }} activeOpacity={0.8} onPress={() => {
    //navigation.navigate("Student", {data};
    setModalVisible(true);
    }
    }>
      <Image style={{
        width: 50,
        height: 50,
        margin: 5,
        borderRadius: 100
      }} source={{
        uri: data.image
      }}/>
      <View style={{
        //backgroundColor: "#00ff10",
        height: "100%",
        justifyContent: "space-evenly"
      }}>
        <Text style={{
          fontWeight: "bold",
          fontSize: 15
        }}>{data.name}</Text>
        <View style={{
          //backgroundColor: "#8cff00",
          flexDirection: "row",
          alignItems: "center"
        }}>
          <Image style={{
            width: 20,
            height: 20
          }} source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1244/1244336.png"
          }}/>
          <Text style={{
            marginHorizontal: 5,
            fontWeight: "bold"
          }}>{data.birthdate}</Text>
        </View>
      </View>
      <StudentModal data={data} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </TouchableOpacity>
  
  );
  
  
}

export default StudentCard;