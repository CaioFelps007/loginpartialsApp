import { TextInput, View} from 'react-native';
import { estilos } from '../styles/StyleSheet';





export default function Inputs() {

    return (
        <View>
 
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





