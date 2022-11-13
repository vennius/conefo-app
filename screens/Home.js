import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {
  useState
} from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Post from "../components/Post";
import * as Animatable from 'react-native-animatable';

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

function HomeScreen( {
  navigation
}) {

  const slogan = "Study now, be proud later...";

  const buttonlist = [{
    name: "STUDENTS",
    navigateTo: "Students",
    bgColor: "#5adeff",
    textColor: "#0087ff"
  }];

  const memories = [{
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
      caption: "haii"
    },
    {
      id: 4,
      image: "https://media.discordapp.net/attachments/720538289656037446/1021781943542632518/IMG-20220815-WA0006.jpg",
      caption: "Selfie di kelas 👍"
    },
  ];

  const teachers = [{
    name: "Kenny Calnelius Winata",
    image: "https://images.unsplash.com/photo-1667684550432-35d19dd88940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=60"
  },
    {
      name: "Kenny Calnelius Winata",
      image: "https://images.unsplash.com/photo-1667684550432-35d19dd88940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=60"
    },
    {
      name: "Kenny Calnelius Winata",
      image: "https://images.unsplash.com/photo-1667684550432-35d19dd88940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=60"
    },
    {
      name: "Kenny Calnelius Winata",
      image: "https://images.unsplash.com/photo-1667684550432-35d19dd88940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=60"
    },
    {
      name: "Kenny Calnelius Winata",
      image: "https://images.unsplash.com/photo-1667684550432-35d19dd88940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=60"
    },
    {
      name: "Kenny Calnelius Winata",
      image: "https://images.unsplash.com/photo-1667684550432-35d19dd88940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=60"
    },
    {
      name: "Kenny Calnelius Winata",
      image: "https://images.unsplash.com/photo-1667684550432-35d19dd88940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=60"
    },
    {
      name: "Kenny Calnelius Winata",
      image: "https://images.unsplash.com/photo-1667684550432-35d19dd88940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=60"
    },
    {
      name: "Kenny Calnelius Winata",
      image: "https://images.unsplash.com/photo-1667684550432-35d19dd88940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=60"
    }]

  return (
    <ScrollView showsVerticalScrollIndicator={false} decelerationRate={"fast"} overScrollMode={"never"} style={styles.container}>
      <TouchableOpacity
      style={ {
        width: 60,
        height: 60,
        backgroundColor: "#dedede",
        padding: 10,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        margin: 10
      }}
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate("Students");
      }}
      >
        <Image source={ {
        uri: "https://cdn-icons-png.flaticon.com/512/2995/2995620.png"
      }} style={ {
        width: "100%",
        height: "100%"
      }} />
      </TouchableOpacity>
      <View style={styles.topSection}>
        <Logo />
        <Animatable.Text
      style={ {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
      }}
      animation="bounce"
      duration={800}
      iterationCount="infinite"
      iterationDelay={3000}
      >
          {slogan}
        </Animatable.Text>
        <Text style={ {
        textAlign: "center",
        fontSize: 30,
        textDecorationLine: "underline",
        marginTop: 20
      }}>TEACHERS</Text>
        <ScrollView style={ {
        width: "100%"
      }} endFillColor={"black"} overScrollMode={"never"} horizontal={true}>
          {teachers.map((data, i) => {
          return (
            <View key={i} style={ {
              width: 110,
              height: 135,
              //backgroundColor: "white",
              margin: 10
            }}>
              <Image source={ {
                uri: data.image
              }} style={ {
                width: "100%",
                height: "80%",
                borderRadius: 50
              }} />
              <Text style={ {
                textAlign: "center",
                fontWeight: "bold"
              }}>{data.name}</Text>
            </View>
          );
        })}
        </ScrollView>
        <View
      style={ {
        flexDirection: "row",
        margin: 20,
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
      }}
      >
      </View>
      </View>
      <Text style={ {
      textAlign: "center",
      fontWeight: "bold",
      textDecorationLine: "underline",
      fontSize: 30
    }}>Memories</Text>
        <ScrollView
      style={ {
        paddingBottom: 15
      }}
      horizontal={true}
      overScrollMode={"never"}>
        {memories.map((data, i) => {
        return (
          <Post data={data} key={data.id} />
        );
      })}
        </ScrollView>
    </ScrollView>
  );
}

export default HomeScreen;