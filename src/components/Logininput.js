import { TextInput, View} from 'react-native';
import { estilos } from '../styles/StyleSheet';





export default function Inputs() {

    return (
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
           

    
    )
}





