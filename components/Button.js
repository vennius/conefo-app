import { TouchableOpacity, Text } from "react-native";

export default function Button({ color, content, navigation, navigateTo }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        padding: 10,
        borderRadius: 5,
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
        navigation.navigate(navigateTo);
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {content}
      </Text>
    </TouchableOpacity>
  );
}
