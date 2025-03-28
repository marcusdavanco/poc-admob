import { useAuthService } from "@/services/AuthService";
import type { SignInRequest, SignUpRequest } from "../services/AuthService/types";
import { useMutation } from "@tanstack/react-query";

export function useAuthQuery() {
    const authService = useAuthService();

    const signInMutation = useMutation({
        mutationFn: async (data: SignInRequest) => {
            return authService.signIn(data);
        }        
    })

    const signIn = async (data: SignInRequest) => {
        return signInMutation.mutateAsync(data);
    }

    const signUpMutation = useMutation({
        mutationFn: async (data: SignUpRequest) => {
            return authService.signUp(data);
        }        
    })

    const signUp = async (data: SignUpRequest) => {
        return signUpMutation.mutateAsync(data);
    }
    
    return { signIn, signUp };
}