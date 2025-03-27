import { Pressable } from "react-native";
import { Text } from "react-native";

interface ButtonProps {
    title: string;
    variant?: "primary" | "secondary";
}

export function Button({ title, variant = 'primary' }: ButtonProps) {
    return (
        <Pressable className={`${variant === 'primary' ? 'bg-blue-500' : 'bg-blue-900'} rounded-lg p-2 h-12 item-center justify-center`}>
            <Text className="text-white text-center font-bold uppercase">
                {title}
            </Text>
        </Pressable>
    );
}
