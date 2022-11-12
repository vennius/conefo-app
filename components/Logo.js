import { Image } from "react-native";
import * as Animate from "react-native-animatable";

function Logo(){
  return (
  <Animate.Image 
  style={{
    width: 200,
    height: 200,
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
  animation={"lightSpeedIn"}
  duration={800}
  delay={500}
  />
  );
}

export default Logo;