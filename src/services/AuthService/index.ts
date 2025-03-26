import { api } from "@/lib/supabase";
import type { SignInRequest, SignUpRequest } from "./types";
import { useSession } from "@/context/UseSession";

export function useAuthService() {
    const { authenticate } = useSession()
    
    const signUp = async ({ email, password }: SignUpRequest) => {
        const { data, error } = await api.auth.signUp({
            email,
            password,
        });

        if (error) {
            console.error("Signup error", error);
            return error;
        }

        return data;
    };

    const signIn = async ({ email, password }: SignInRequest) => {
        const { data, error } = await api.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error("SignIn error", error);
            return error;
        }
        
        authenticate(data);

        return data;
    };

    return {
        signUp,
        signIn,
    };
}
