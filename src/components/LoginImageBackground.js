import { ImageBackground } from "react-native";
import Texts from "./LoginText";
import Inputs from "../components/Logininput";
import Buttonlogin from "../components/LoginButton";
import ImageReacts from "../components/LoginImage";
import { View } from "react-native";
import { estilos } from "../styles/StyleSheet";

const imagesfundo = { uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/539459-ilustracao-preto-e-branco-do-bodybuilder-do-gorila-vetor.jpg' }

export default function ImagesFundo() {
    return (

        // Área da imagem de fundo onde engloba as partials do site como, Titulo, Input, Button.
        <ImageBackground source={imagesfundo} style={estilos.imagemdofundo}>
            <View style={estilos.terciaryContainer}>
                <Texts/>
                <Inputs/>
                <Buttonlogin/>
            </View>

            <ImageReacts/>



        </ImageBackground>
    )
}