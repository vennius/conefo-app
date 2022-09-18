import {View, Text, Image} from "react-native";

function StudentScreen({navigation, route}){
  const {data} = route.params;
  return (
  
    <View style={{
      //backgroundColor: "red",
      alignItems: "center"
    }}>
    
      <Image style={{
        width: 300,
        height: 300
      }} source={{
        uri: data.image
      }}/>
      
      <View style={{
        width: 250,
        height: 350,
        backgroundColor: "#12d0ff",
        marginTop: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      }}>
        
      </View>
      
    </View>
  
  );
}

export default StudentScreen;