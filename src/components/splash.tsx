import { useEffect } from "react";
import { useAppOpenAd, TestIds } from "react-native-google-mobile-ads";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export function Splash() {
    const router = useRouter();
    
    const { isLoaded, isOpened, isShowing, show, load, isClosed} = useAppOpenAd(
        TestIds.APP_OPEN
    );    

    useEffect(() => {
        load();
    }, [load])

    useEffect(() => {
        if (isLoaded) {
            show();
        }
    }, [isLoaded, show]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: adding router causes an infinite loop
    useEffect(() => {
        if (isClosed) {
            router.replace("/(app)/explore");
        }
    }, [isClosed, ]);

    return (
    <View style={styles.container}>
        <Text>{"Splash screen"}</Text>
    </View>
    );    
}

export default Splash;

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  position: 'absolute',
 },
});