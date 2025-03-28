import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SessionProvider } from "@/context/UseSession";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import mobileAds from "react-native-google-mobile-ads";
import { Splash } from "@/components/splash";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
    initialRouteName: "(app)",
}

export default function RootLayout() {
    const queryClient = new QueryClient();    
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    useEffect(() => {
        mobileAds()
            .initialize()
            .then((adapterStatuses) => {
                console.log("adapterStatuses", adapterStatuses);
            });
    }, []);

    // Ensure hooks are called unconditionally
    if (!loaded) {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <SessionProvider>
                <ThemeProvider
                    value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
                >
                    <StatusBar style="auto" />
                    <Stack>
                        <Stack.Screen name="(auth)" />
                        <Stack.Screen name="(app)" />
                        <Stack.Screen name="+not-found" />
                    </Stack>                    
                    <Splash/>
                </ThemeProvider>
            </SessionProvider>
        </QueryClientProvider>
    );
}
