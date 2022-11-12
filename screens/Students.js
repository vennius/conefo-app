import { useState } from "react";
import { Text, View, Image, ScrollView, Modal, Alert } from "react-native";
import StudentCard from "../components/StudentCard";
import * as Animatable from 'react-native-animatable';

export default function StudentsScreen({navigation}){
  const [modal, setModal] = useState(null);
  
  const students = [
  
  {
   name: "stevennius",
   birthdate: "26-08-2008",
   image: "https://images.unsplash.com/photo-1663488631285-ee6eaaa9aef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
   gender: "male",
   from: "Medan",
  },
  {
   name: "vanessa",
   birthdate: "01-05-2008",
   image: "https://images.unsplash.com/photo-1663487916170-23c86c596284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
   gender: "female",
   from: "Medan",
  },
  {
   name: "mario",
   birthdate: "22-01-2003",
   image: "https://images.unsplash.com/photo-1661786954457-9ffe23d9c30a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
   gender: "male",
   from: "Medan",
  },
  {
   name: "willian",
   birthdate: "16-05-2008",
   image: "https://images.unsplash.com/photo-1557180999-e2d5a8982c27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
   gender: "male",
   from: "Medan",
  }
  ];
  return (
  
    <View>
      <Image style={{
        width: "100%",
        height: 200,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
      }} source={{
      uri: "https://images.unsplash.com/photo-1668108644868-a7865d4258c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"}}/>
        <Text style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 25,
          textDecorationLine: "underline"
        }}>Students List</Text>
      <ScrollView style={{
        //backgroundColor: "red",
        marginTop: 10,
        marginBottom: 10
      }}>
        <Animatable.View style={{
          alignItems: "center",
          width: "100%"
        }} animation="slideInRight" duration={700}>
          {students.map((student, i) => <StudentCard key={i} data={student}/>)}
        </Animatable.View>
      </ScrollView>
    </View>
  
  );
}