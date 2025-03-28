import { Text } from "react-native";
import { Redirect, Stack } from 'expo-router';

import { useSession } from "@/context/UseSession";

export const unstable_settings = {
    initialRouteName: "explore",
}

export default function AuthLayout() {
    const { state: {session, isLoading} } = useSession();

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    if (!session) {
        return <Redirect href="/(auth)/sign-in" />;
    }

    return (
        <Stack>            
            <Stack.Screen name="explore" options={{ headerShown: false, animation: "fade_from_bottom" }} />                
        </Stack>
    );
}