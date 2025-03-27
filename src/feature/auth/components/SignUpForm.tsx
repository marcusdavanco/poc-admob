import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { FormField } from "@/components/form/form-field";
import { View } from "react-native";
import { useAuth } from "../hooks/useAuth";

export function SignUpForm() {
    const { controlSignUp, handleSubmitSignUp, onSubmitSignUp } = useAuth();

    return (
        <Card>
            <View className="gap-2">
                <FormField
                    label="Email"
                    type="text"
                    formProps={{
                        control: controlSignUp,
                        name: "email",
                        rules: { required: "Campo obrigatório" },
                    }}
                />
                <FormField
                    label="Senha"
                    type="password"
                    formProps={{
                        control: controlSignUp,
                        name: "password",
                        rules: { required: "Campo obrigatório" },
                    }}
                />
                <FormField
                    label="Confirme a Senha"
                    type="password"
                    formProps={{
                        control: controlSignUp,
                        name: "password-confirmation",
                        rules: { required: "Campo obrigatório" },
                    }}
                />
            </View>
            <Button title="Cadastrar" onPressFn={handleSubmitSignUp(onSubmitSignUp)} />
        </Card>
    );
}
