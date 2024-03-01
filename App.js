import { View } from "react-native";
import Login from "./src/pages/Login";
import { estilos } from "./src/styles/StyleSheet";
import ImageReacts from "./src/components/LoginImage";

export default function App() {

  return (
    <View style={estilos.container}>
      <Login />

    </View>
  )
}