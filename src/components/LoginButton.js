import { Button, View,Text } from "react-native";
import ImagesFundo from "./LoginImageBackground";
import { TouchableOpacity } from "react-native-web";
import { estilos } from "../styles/StyleSheet";



export default function Buttonlogin() {

    return (
// Botão "pronto" do site.

<TouchableOpacity
style={estilos.btn}
 onPress={() => alert('botao clicado')}
 >
   <Text style={estilos.botaoo}>Press</Text> 
</TouchableOpacity>
               
                
            

       
           
        
    )
}

