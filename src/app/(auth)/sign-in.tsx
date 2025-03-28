import { LoginForm } from "@/feature/auth/components/LoginForm";
import { SafeAreaView } from "react-native";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function SignIn() {
    return (        
        <SafeAreaView className="flex-1 bg-white dark:bg-slate-900 justify-end p-4">
            <View>
                <Text className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                    Olá, seja bem-vindo(a)
                </Text>
                <LoginForm />                                
                <Link href="/sign-up" className="text-white text-center py-4 font-bold">Cadastre-se</Link>                
            </View>
        </SafeAreaView>
    );
}