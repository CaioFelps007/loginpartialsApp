import { ImageBackground } from "react-native";
import { View } from "react-native";
import { estilos } from "../styles/StyleSheet";
import Login from "../pages/Login";
import ImageReacts from "./LoginImage";


const imagesfundo = { uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/539459-ilustracao-preto-e-branco-do-bodybuilder-do-gorila-vetor.jpg' }

export default function ImagesFundo({ children }) {
    return (
        <View style={estilos.secondaryContainer}>
            {/* // Área da imagem de fundo onde engloba as partials do site como, Titulo, Input, Button. */}
            <ImageBackground source={imagesfundo} resizeMode={"cover"} style={estilos.imagemdofundo}>

              
                    {children}
                


                <ImageReacts />

            </ImageBackground>

        </View>


    )
}