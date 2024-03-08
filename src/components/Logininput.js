import { TextInput, View} from 'react-native';
import { estilos } from '../styles/StyleSheet';
import ImagesFundo from './LoginImageBackground';





export default function Inputs() {

    return (
        <ImagesFundo>
 <View>
 
 {/*Caixas de textos para inserir suas informações  */}
            <TextInput style={estilos.InputName}
                placeholder='Seu Nome'
            />
            <TextInput style={estilos.InputName}
                placeholder='Sua Senha'
                secureTextEntry={true}
            />

        </View>
        </ImagesFundo>
       
           

    
    )
}





