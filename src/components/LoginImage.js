import { Image, } from "react-native";
import { estilos } from "../styles/StyleSheet";


const imagereact = { uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/9472292-gorila-ginasio-logo-premium-vetor.jpg' }

export default function ImageReacts() {
    return (
        <Image source={imagereact} style={estilos.imagereact}/>
    )
}