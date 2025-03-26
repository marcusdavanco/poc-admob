import { LoginForm } from "@/feature/auth/components/LoginForm";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <View className="h-full justify-center bg-slate-100 p-4">
                <LoginForm />
            </View>
        </SafeAreaView>
    );
}
