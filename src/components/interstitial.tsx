import { Button, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { TestIds, useInterstitialAd } from "react-native-google-mobile-ads";
import { useRouter } from "expo-router";

const Interstitial = () => {
  const router = useRouter();
  
    const { isLoaded, isOpened, isShowing, show, load, isClosed } =
    useInterstitialAd(TestIds.INTERSTITIAL, {
      keywords: ["fashion", "clothing"],
    });

useEffect(() => {
  load();
}, [load]);

// biome-ignore lint/correctness/useExhaustiveDependencies: adding router causes an infinite loop
useEffect(() => { 
  if (isClosed) {
    alert("Game will start soon....");
    router.back();
  }
}, [isClosed]);

return (
  <View style={styles.container}>
    <Button
       title="Start Game (with ad)"
       onPress={() => {
         if (isLoaded) {show();}
       }}
    />
  </View>
 );
};

export default Interstitial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
text: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});