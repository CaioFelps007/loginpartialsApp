import { View } from "react-native";
import ImagesFundo from "../components/LoginImageBackground";

import Texts from "../components/LoginText";
import Inputs from "../components/Logininput";
import { estilos } from "../styles/StyleSheet";
import Buttonlogin from "../components/LoginButton";

export default function Login() {
  return (
    <ImagesFundo>
      <View style={estilos.terciaryContainer}>
        <Texts />
        <Inputs />
        <Buttonlogin />
      </View>
    </ImagesFundo>

  )

}