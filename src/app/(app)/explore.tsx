import { useExplore } from "@/feature/explore/hooks/useExplore";
import { ExploreScreen } from "@/feature/explore/screen/explore-screen";
import { SafeAreaView } from "react-native";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";

export default function Explore() {    

    const { adUnitId } = useExplore();
    
    return (
        <SafeAreaView className="flex-1 bg-white dark:bg-slate-900 justify-center items-center">            
            <ExploreScreen />
            <BannerAd
                unitId={adUnitId}
                onAdClosed={() => console.log("closed")}
                size={BannerAdSize.BANNER}
            />
        </SafeAreaView>
    );
}