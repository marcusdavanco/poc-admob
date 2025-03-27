import { SafeAreaView } from "react-native";
import { Text } from "react-native";

export default function Explore() {
    return (
        <SafeAreaView className="flex-1 bg-white dark:bg-slate-900 justify-center items-center">
            <Text className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Explore
            </Text>
        </SafeAreaView>
    );
}