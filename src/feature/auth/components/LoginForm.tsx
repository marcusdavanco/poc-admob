import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { FormField } from "@/components/form/form-field";
import { View, Text, Pressable } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { Link } from "expo-router";

export function LoginForm() {
    const { control } = useAuth();

    return (
        <Card>            
            <View className="gap-2">
                <FormField
                    label="Email"
                    type="text"
                    formProps={{
                        control,
                        name: "email",
                        rules: { required: "Campo obrigatório" },
                    }}
                />
                <FormField
                    label="Senha"
                    type="password"
                    formProps={{
                        control,
                        name: "password",
                        rules: { required: "Campo obrigatório" },
                    }}
                />
            </View>
            <Button title="Login" />                
        </Card>
    );
}
