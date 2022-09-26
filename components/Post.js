import { View, Text, Modal, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Post({ data }) {
  const [isModalVisible, setModalVisible] = useState(false);
  
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: "white",
        borderRadius: 20,
        overflow: "hidden",
        marginTop: 15,
      }}
    >
      <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.9}>
        <Image
          style={{
            width: "100%",
            height: 250,
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
          <Image style={{
            width: 350,
            height: 250,
            borderRadius: 10
          }} source={{
            uri: data.image
          }}/>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
