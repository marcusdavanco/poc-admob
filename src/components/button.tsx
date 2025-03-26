import { Pressable } from "react-native";
import { Text } from "react-native";

interface ButtonProps {
    title: string;
}

export function Button({ title }: ButtonProps) {
    return (
        <Pressable className="bg-blue-500 rounded-lg p-2 h-12 item-center justify-center">
            <Text className="text-white text-center font-bold uppercase">
                {title}
            </Text>
        </Pressable>
    );
}
