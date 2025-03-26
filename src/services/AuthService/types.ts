import type { User, Session as SupaSession } from "@supabase/supabase-js";

export interface SignUpRequest {
    email: string;
    password: string;
}

export interface SignInRequest {
    email: string;
    password: string;
}

// TODO: Add more fields as needed
export interface Session {
    user: User
    session: SupaSession    
}
