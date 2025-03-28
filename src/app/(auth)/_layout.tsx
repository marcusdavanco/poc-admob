import { Text } from "react-native";
import { Redirect, Stack } from 'expo-router';

import { useSession } from "@/context/UseSession";

export const unstable_settings = {
    initialRouteName: "sign-in",
}

export default function AuthLayout() {
    const { state: {session, isLoading} } = useSession();

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    if (session) {
        return <Redirect href="/(app)/explore" />;
    }

    return (
        <Stack>
            <Stack.Screen name="sign-in" options={{ headerShown: false, animation: "fade_from_bottom" }} />
            <Stack.Screen name="sign-up" options={{ headerShown: false , animation: "fade_from_bottom" }} />
        </Stack>
    );

    

}