import { Image } from "react-native";

function Logo(){
  return (
  <Image 
  style={{
    width: 100,
    height: 100,
    borderRadius: 100,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  }}
  source={require("../assets/icon.png")}
  />
  );
}

export default Logo;