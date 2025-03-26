import type { ReactNode } from "react";
import { View } from "react-native";

interface CardProps {
    children: ReactNode;
}

export function Card({ children }: CardProps) {
    return (
        <View className="p-4 bg-white rounded-lg shadow-md gap-4">
            {children}
        </View>
    );
}
