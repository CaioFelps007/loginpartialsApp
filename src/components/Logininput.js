import { TextInput, View} from 'react-native';
import { estilos } from '../styles/StyleSheet';
import ImagesFundo from './LoginImageBackground';





export default function Inputs() {

    return (
    
 <View>
 
 {/*Caixas de textos para inserir suas informações  */}
            <TextInput style={estilos.input}
                placeholder='Seu Nome'
            />
            <TextInput style={estilos.input}
                placeholder='Sua Senha'
                secureTextEntry={true}
            />

        </View>

       
           

    
    )
}





