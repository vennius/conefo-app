import { Text, View, Image, ScrollView } from "react-native";
import StudentCard from "../components/StudentCard";

export default function StudentsScreen({navigation}){
  
  const students = [
    {
    name: "stevennius",
    birthdate: "26-08-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "vanessa",
    birthdate: "17-09-2023",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "jen",
    birthdate: "13-7-2011",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    name: "Stevennius chandra",
    birthdate: "13-7-2008",
    image: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
  ]
  
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
      uri: "https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}}/>
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
        <View style={{
          alignItems: "center",
          width: "100%"
        }}>
          {students.map((student, i) => <StudentCard key={i} data={{
            name: student.name,
            birthdate: student.birthdate,
            image: student.image
          }}/>)}
        </View>
      </ScrollView>
    </View>
  
  );
}