import { View, Text, Modal, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import * as Animatable from 'react-native-animatable';

export default function Post({ data }) {
  const [isModalVisible, setModalVisible] = useState(false);
  
  return (
    <View
      style={{
        width: 300,
        backgroundColor: "white",
        borderRadius: 20,
        overflow: "hidden",
        marginTop: 15,
        marginHorizontal: 10
      }}
    >
      <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.9}>
        <Image
          style={{
            width: "100%",
            height: 200,
          }}
          source={{
            uri: data.image,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          margin: 8,
        }}
      >
        {data.caption}
      </Text>
      <Modal animationType="fade" visible={isModalVisible} transparent={true}>
        <TouchableOpacity style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.6)",
          justifyContent: "center",
          alignItems: "center"
        }} onPress={() => setModalVisible(false)} activeOpacity={1}>
          <Animatable.Image style={{
            width: 350,
            height: 250,
            borderRadius: 10
          }} source={{
            uri: data.image
          }} animation="zoomIn" duration={250}/>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
