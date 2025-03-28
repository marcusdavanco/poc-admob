import { TestIds } from "react-native-google-mobile-ads";
import { useRouter } from "expo-router";
import { useSession } from "@/context/UseSession";


export function useExplore() {
    const router = useRouter()
    const { clearSession } = useSession()  

    const handleLogout = () => {
        clearSession()
        router.replace("/(auth)/sign-in")
    }

    const adUnitId = TestIds.BANNER
    
    return {
     adUnitId,
     handleLogout
    }
}

