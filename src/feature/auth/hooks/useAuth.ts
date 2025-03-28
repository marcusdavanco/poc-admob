import { useAuthQuery } from "@/queries/use-auth-query";
import { useForm } from "react-hook-form";
import { useRouter } from "expo-router";
import type { SignInForm, SignUpForm } from "../types";

export function useAuth() {
    const { signUp, signIn } = useAuthQuery();
    const router = useRouter()
    
    const {        
        handleSubmit: handleSubmitSignIn,
        control: controlSignIn,
        formState: { errors: errorsSignIn },        
    } = useForm();

    const onSubmitSignIn = async (data: SignInForm) => {
        try {
            await signIn(data);
            router.navigate('/(app)/explore')
        } catch (error) {
            console.error(error)
        }        
    };

    const {        
        handleSubmit: handleSubmitSignUp,
        control: controlSignUp,
        formState: { errors: errorsSignUp },        
    } = useForm();

    const onSubmitSignUp = async (data: SignUpForm) => {
        try {
            await signUp(data);
            router.navigate('/(app)/explore')
        } catch (error) {
            console.error(error)
        }
    };

    return {
        handleSubmitSignIn,
        controlSignIn,
        errorsSignIn,
        onSubmitSignIn,
        handleSubmitSignUp,
        controlSignUp,
        errorsSignUp,
        onSubmitSignUp,
    };
}
