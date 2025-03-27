import Feather from "@expo/vector-icons/Feather";
import { useCallback, useState } from "react";
import {
    Controller,
    type FieldValues,
    type UseControllerProps,
} from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";

export type InputProps<T extends FieldValues> = {
    label: string;
    type: "text" | "password";
    formProps: UseControllerProps<T>;
};

export function FormField<TFields extends FieldValues>({
    label,
    type,
    formProps,
}: InputProps<TFields>) {
    const [visible, setVisible] = useState(false);

    const handleToggleVisibility = useCallback(() => {
        setVisible(!visible);
    }, [visible]);

    return (
        <Controller
            control={formProps.control}
            render={({ field: { onChange, onBlur, value } }) => (
                <View className="gap-2">
                    <Text>{label}</Text>
                    <View className="border border-gray-300 rounded-lg flex-row gap-2 items-center relative px-2">
                        <TextInput 
                            secureTextEntry={type === "password" && !visible} 
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            className="w-full"
                        />
                        <Pressable
                            onPress={handleToggleVisibility}
                            className="absolute right-4"
                        >
                            {type === "password" && (
                                <Feather
                                    name={visible ? "eye-off" : "eye"}
                                    color="#d1d5db"
                                    size={18}
                                />
                            )}
                        </Pressable>
                    </View>
                </View>
            )}
            name={formProps.name}
            rules={formProps.rules}
        />
    );
}
