import { View, Text, TextInput, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useCallback, useState } from "react";

enum InputType {
    TEXT = "text",
    PASSWORD = "password",
}

export type InputProps = {
    label: string;
    type: InputType;
};

export function FormField({ label, type }: InputProps) {
    const [visible, setVisible] = useState(false);

    const handleToggleVisibility = useCallback(() => {
        setVisible(!visible);
    }, [visible]);

    <View>
        <Text>{label}</Text>
        <View>
            <TextInput secureTextEntry={type === InputType.PASSWORD} />
            <Pressable onPress={handleToggleVisibility}>
                { type === InputType.PASSWORD && <Feather name={visible ? 'eye-off' : 'eye'} />}
            </Pressable>
        </View>
    </View>;
}
