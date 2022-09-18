import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  topSection: {
    justifyContent: "center",
    alignItems: "center",
  },
});

function HomeScreen({navigation}) {
  const slogan = "Study now, be proud later...";
  
  const buttonlist = [{
    name: "STUDENTS",
    navigateTo: "Students",
    color: "#ff9000"
  },
  {
    name: "TEACHERS",
    navigateTo: "Teachers",
    color: "#ff00cf"
  }
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Logo />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          {slogan}
        </Text>
        <View
          style={{
            flexDirection: "row",
            margin: 20,
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
        {buttonlist.map((btn, i) => 
          <Button key={i} color={btn.color} content={btn.name} navigation={navigation} navigateTo={btn.navigateTo}/>)
        }
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
