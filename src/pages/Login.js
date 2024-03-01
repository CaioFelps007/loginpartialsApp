import { View } from "react-native";
import ImagesFundo from "../components/LoginImageBackground";
import { estilos } from "../styles/StyleSheet";

export default function Login() {
  return (


    // Página de login onde esta chamando a imagem de fundo e as partials.
    <View style={estilos.secondaryContainer}>
      <ImagesFundo/>
    </View>

  )

}