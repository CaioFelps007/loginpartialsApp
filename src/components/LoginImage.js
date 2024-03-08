import { Image, } from "react-native";
import { estilos } from "../styles/StyleSheet";
import ImagesFundo from "./LoginImageBackground";


const imagereact = { uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/9472292-gorila-ginasio-logo-premium-vetor.jpg' }

export default function ImageReacts() {
    return (

<ImagesFundo>
{/* // Imagem localizada em baixo da caixa vermelha onde se preenche as informações. */}
        <Image source={imagereact} style={estilos.imagereact}/>

</ImagesFundo>
      
    )
}