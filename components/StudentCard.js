import { useState } from "react";
import { Text, View, TouchableOpacity, Image, Modal, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

function StudentCard({data}){
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  
  const styles = StyleSheet.create({
    modal: {
      heigt: 100,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 20,
      alignItems: "center"
    },
    infoText: {
      fontWeight: "bold",
      letterSpacing: 0.5
    },
    closeBtn: {
      width: 40,
      height: 40,
      padding: 10,
      backgroundColor: "#fa9999",
      borderRadius: 100,
      marginTop: 10
    }
  });
  
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
      <Modal animationType="fade" visible={modalVisible} transparent={true}>
        <TouchableOpacity activeOpacity={1} onPress={() => setModalVisible(false)} style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}>
          <View style={styles.modal}>
            <Text style={styles.infoText}>Name: {data.name}</Text>
            <Text style={styles.infoText}>Birthdate: {data.birthdate}</Text>
            <Text style={styles.infoText}>Gender: {data.gender}</Text>
            <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)} activeOpacity={0.5}>
              <Image style={{
                width: "100%",
                height: "100%"
              }} source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
              }}/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  
  );
  
  
}

export default StudentCard;