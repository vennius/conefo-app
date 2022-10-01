import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Post from "../components/Post";
 import TypeWriter from 'react-native-typewriter';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9AECEA",
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
    bgColor: "#5adeff",
    textColor: "#0087ff"
  }
  ];
  
  const memories = [
    {
      id: 0,
      image: "https://media.discordapp.net/attachments/720538289656037446/1021424692696977509/IMG-20220812-WA0008.jpg",
      caption: "Foto Bersama Satu Kelas :>"
    },
    {
      id: 1,
      image: "https://media.discordapp.net/attachments/720538289656037446/1021781431841718292/IMG-20220816-WA0000.jpg",
      caption: "Yel-yel Lomba 17 Agustus 🇮🇩"
    },
    {
      id: 2,
      image: "https://media.discordapp.net/attachments/720538289656037446/1021781585693003827/IMG-20220815-WA0069.jpg",
      caption: "Para para orang kul 🥶"
    },
    {
      id: 3,
      image: "https://media.discordapp.net/attachments/720538289656037446/1021781863930531910/IMG-20220815-WA0038.jpg",
      caption: "Cheeeseee ✌️"
    },
    {
      id: 4,
      image: "https://media.discordapp.net/attachments/720538289656037446/1021781943542632518/IMG-20220815-WA0006.jpg",
      caption: "Selfie di kelas ygy 👍"
    },
  ];
  
  return (
    <ScrollView showsVerticalScrollIndicator={false} decelerationRate={"fast"} style={styles.container}>
      <View style={styles.topSection}>
        <Logo />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          <TypeWriter maxDelay={250} typing={1}>
            {slogan}
          </TypeWriter>
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
          <Button key={i} bgColor={btn.bgColor} content={btn.name} navigation={navigation} navigateTo={btn.navigateTo} textColor={btn.textColor}/>)
        }
        </View>
      </View>
      <Text style={{
        textAlign: "center",
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontSize: 30
      }}>Our Memories</Text>
        <View style={{
          alignItems: "center",
          paddingBottom: 15
        }}>
        {memories.map((data, i) => {
          return (
            <Post data={data} key={data.id}/>
          );
        })}
        </View>
    </ScrollView>
  );
}

export default HomeScreen;
