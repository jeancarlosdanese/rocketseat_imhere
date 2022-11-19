import { useState } from "react";
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Participant } from "../../components/Participant"

import { styles } from "./styles";


export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState("");

    function handleParticipantAdd() {
        if(participants.includes(participantName)) {
            return Alert.alert(`Participante já existe", "Já existe um participante com o nome: ${participantName}`)
        }

        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName("");
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante: ${name}?`, [
            {
                text: "Sim",
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: "Não",
                style: "cancel",
            },
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>

            <Text style={styles.eventDate}>Sexta, 18 de Novembro de 2022</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou ao evento ainda? Adicione participants a lista de presença.
                    </Text>
                )}
            />

        {/* <ScrollView showsVerticalScrollIndicator={false}>
            {
                participants.map(participante => (
                    <Participant
                        key={participante}
                        name={participante}
                        onRemove={() => handleParticipantRemove("Mario de Andrade")}
                    />
                ))
            }
        </ScrollView> */}

        </View>
    );
}