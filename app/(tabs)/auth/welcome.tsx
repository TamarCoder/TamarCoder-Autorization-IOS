import { Image } from "expo-image";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import logo from "@/assets/images/logo.png";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <View style={styles.homeContent}>
          <Image source={logo} style={styles.logoImg} />
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => router.push("/(tabs)/main")}
          >
            <Text>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  homeContent: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
    marginTop: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImg: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
  },
  Btn: {
    position: "absolute",
    width: "50%",
    height: 50,
    bottom: "15%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
