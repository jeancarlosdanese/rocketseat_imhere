import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";


function handleParticipantAdd() {
    console.log("Você clicou no botão..");
}

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>

            <Text style={styles.eventDate}>Sexta, 18 de Novembro de 2022</Text>
            
            <View style={styles.form}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"/>

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}