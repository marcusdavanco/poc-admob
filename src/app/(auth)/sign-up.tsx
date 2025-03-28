import { SignUpForm } from "@/feature/auth/components/SignUpForm";
import { SafeAreaView } from "react-native";
import { Text } from "react-native";
import { Link } from "expo-router";

export default function SignUp() {
    return (        
        <SafeAreaView className="flex-1 bg-white dark:bg-slate-900 justify-end p-4">
            <Text className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Cadastre-se
            </Text>
            <SignUpForm /> 
            <Link href="/" className="text-white text-center py-4 font-bold">Já tem uma conta?</Link>
        </SafeAreaView>
    );
}