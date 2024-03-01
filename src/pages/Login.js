import { View } from "react-native";
import ImagesFundo from "../components/LoginImageBackground";
import { estilos } from "../styles/StyleSheet";

export default function Login() {
  return (

    <View style={estilos.secondaryContainer}>
      <ImagesFundo/>
    </View>

  )

}