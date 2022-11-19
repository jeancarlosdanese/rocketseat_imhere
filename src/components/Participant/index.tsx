import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type Person = {
    name: string;
    onRemove: () => void;
}


// export function Participant(person: Person) {
export function Participant({ name, onRemove }: Person) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {/* {person.name} */}
                {name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    );
}