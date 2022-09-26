import { Modal, Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function StudentModal({data, setModalVisible, modalVisible}) {
  
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
    <Modal animationType="fade" visible={modalVisible} transparent={true}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setModalVisible(false)}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Image
          style={{
            marginBottom: 10,
            width: 250,
            height: 250,
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
          }}
          source={{
            uri: data.image,
          }}
        />
        <View style={styles.modal}>
          <Text style={styles.infoText}>Name: {data.name}</Text>
          <Text style={styles.infoText}>Birthdate: {data.birthdate}</Text>
          <Text style={styles.infoText}>Gender: {data.gender}</Text>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setModalVisible(false)}
            activeOpacity={0.5}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1828/1828778.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
