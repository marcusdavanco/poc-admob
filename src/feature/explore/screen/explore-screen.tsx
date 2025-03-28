import { Button } from "@/components/button";
import { Card } from "@/components/card";
import Interstitial from "@/components/interstitial";
import { useSession } from "@/context/UseSession";
import { ScrollView, Text, View } from "react-native";
import { useExplore } from "../hooks/useExplore";


export function ExploreScreen(){
    
    const { handleLogout } = useExplore()

    return (
        <>            
            <View className="w-full bg-white">
                <View className="flex-row justify-between items-center p-4 bg-white">
                    <Interstitial />
                    <View className="w-1/4 ml-auto">
                        <Button onPressFn={handleLogout} variant="secondary" title="Logout" />
                    </View>
                </View>
            </View>
            <ScrollView className="m-4">
                <Text className="text-2xl font-bold text-white mb-4">Explore</Text>
                <View className="gap-4">
                    <Card>
                        <Text className="text-lg font-bold">Card #1</Text>
                    </Card>
                    <Card>
                        <View className="w-full min-w-full">
                            <Text className="text-lg font-bold">Card #2</Text>
                        </View>
                    </Card>
                    <Card>
                        <Text className="text-lg font-bold">Card #3</Text>
                    </Card>
                </View>
            </ScrollView>       
        </>
    )
}