import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Participant } from "../../components/Participant"

import { styles } from "./styles";


export function Home() {
    const participantes = ["Mario de Andrade", "Costa e Silva", "Jucelino Kubicheck", "Maria Gema", "Liane", "Bernardo", "Antonio", "Pedro", "Gustavo", "Jéssica"]

    function handleParticipantAdd() {
        console.log("Você clicou no botão Add..");
    }

    function handleParticipantRemove(name: string) {
        console.log(`Você clicou no botão Remove: ${name}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>

            <Text style={styles.eventDate}>Sexta, 18 de Novembro de 2022</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b" />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participantes}
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
                        Ninguém chegou ao evento ainda? Adicione participantes a lista de presença.
                    </Text>
                )}
            />

        {/* <ScrollView showsVerticalScrollIndicator={false}>
            {
                participantes.map(participante => (
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