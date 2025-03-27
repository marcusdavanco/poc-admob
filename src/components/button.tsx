import { Pressable } from "react-native";
import { Text } from "react-native";

interface ButtonProps {
    title: string;
    variant?: "primary" | "secondary";
    onPressFn: () => void;
}

export function Button({ title, variant = 'primary', onPressFn }: ButtonProps) {
    return (
        <Pressable 
            className={`${variant === 'primary' ? 'bg-blue-500' : 'bg-blue-900'} rounded-lg p-2 h-12 item-center justify-center`} 
            onPress={onPressFn}
        >
            <Text className="text-white text-center font-bold uppercase">
                {title}
            </Text>
        </Pressable>
    );
}
