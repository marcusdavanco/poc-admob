import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Session } from "../services/AuthService/types";

interface SessionState {
    isAuthenticated: boolean;
    loading: boolean;
    session?: Session;
}

interface SessionContextProps {
    state: SessionState;
    setAuthenticated: (isAuthenticated: boolean) => void;
    setLoading: (loading: boolean) => void;
    authenticate: (response: Session) => Promise<void>;
    getSession: () => Promise<Session | undefined>;
    clearSession: () => Promise<void>;
}

const storeSession = async (session: Session): Promise<void> => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        throw new Error("Failed to store session");
    }
};

const initialState: SessionState = {
    isAuthenticated: false,
    loading: false,
};

const SessionContext = createContext<SessionContextProps>({
    state: initialState,
    setAuthenticated: () => {},
    setLoading: () => {},
    authenticate: async () => {},
    clearSession: async () => {},
    getSession: async () => undefined,
});

export const SessionProvider = ({
    children,
}: { children: React.ReactNode }) => {
    const [state, setState] = useState<SessionState>(initialState);

    const setAuthenticated = useCallback((isAuthenticated: boolean): void => {
        setState((prev) => ({ ...prev, isAuthenticated }));
    }, []);

    const setLoading = useCallback((loading: boolean): void => {
        setState((prev) => ({ ...prev, loading }));
    }, []);

    const authenticate = async (session: Session): Promise<void> => {
        setAuthenticated(true);
        await storeSession(session);
    };

    const clearSession = useCallback(async (): Promise<void> => {
        if (!state.isAuthenticated) return;

        await AsyncStorage.removeItem(STORAGE_KEY);

        setState(initialState);
    }, [state.isAuthenticated]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: adding setLoading causes an infinite loop
    const getSession = useCallback(async (): Promise<Session | undefined> => {
        setLoading(true);

        try {
            const sessionStr = await AsyncStorage.getItem(STORAGE_KEY);

            if (!sessionStr) {
                throw new Error("No session found");
            }

            const parsedSession = JSON.parse(sessionStr) as Session;

            setState((prev) => ({
                ...prev,
                isAuthenticated: true,
                session: parsedSession,
            }));
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }

            await clearSession();
        } finally {
            setLoading(false);
        }
        const session = state.session;
        return session;
    }, [clearSession, state.session]);

    useEffect(() => {
        getSession()
    }, [getSession])

    const contextValue : SessionContextProps = {
        state,
        setAuthenticated,
        setLoading,
        authenticate,
        clearSession,
        getSession,        
    };

    return (
        <SessionContext.Provider value={contextValue}>{children}</SessionContext.Provider>
    )
};

export const useSession = (): SessionContextProps => {
    const context = useContext(SessionContext);

    if (!context) {
        throw new Error('useSession must be used within a SessionProvider');
    }

    return context;
}

export { SessionContext };
