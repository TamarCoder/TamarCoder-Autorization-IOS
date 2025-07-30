import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import welcomeImage from '../../assets/images/welcome.png';
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router"; 

export default function MainScreen() {
 const router = useRouter(); 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={welcomeStyles.mainContianer}>
        <View style={welcomeStyles.hedline}>
          <Text style={welcomeStyles.heading}>Welcome !</Text>
          <Text style={welcomeStyles.text}>Find the things that you need</Text>
        </View>
        <View>
          <Image source={welcomeImage} style={welcomeStyles.welcomeImage} />
        </View>
        <View style={welcomeStyles.buttons}>
          <TouchableOpacity style={welcomeStyles.sinUp} onPress={() => router.push("/(tabs)/register")}>
            <Text style={welcomeStyles.textColor}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={welcomeStyles.sinIn} onPress={() => router.push("/(tabs)/login")}>
            <Text>Sing In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const welcomeStyles = StyleSheet.create({
  mainContianer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10%",
  },
  hedline: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  heading: {
    fontSize: 35,
    color: "blue",
  },
  text: {
    fontSize: 20,
    color: "#2A7B9B",
  },

  welcomeImage: {
    width: 300,
    height: 400,
  },

  buttons: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  sinUp: {
    width: 150,
    height: 40,
    backgroundColor: "#2A7B9B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  sinIn: {
    width: 150,
    height: 40,
    borderColor: "#2A7B9B",
    borderWidth: 2,
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textColor: {
    color: "white",
  },
});
