import { View } from "react-native";
import Login from "./src/pages/Login";
import { estilos } from "./src/styles/StyleSheet";
import ImageReacts from "./src/components/LoginImage";

export default function App() {

  return (

    // App para rodas a página de login.
    <View style={estilos.container}>
      <Login />

    </View>
  )
}