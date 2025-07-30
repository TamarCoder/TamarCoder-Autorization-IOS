import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import cover from "@/assets/images/cover.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.mainContianer}>
      <View style={styles.cover}>
        <Image source={cover} style={styles.cover} />

        <View style={styles.main}>
          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => router.push("/(tabs)/main")}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.forms}>
            <View style={styles.headline}>
              <Text style={styles.heading}>Welcome Back </Text>
              <Text style={styles.span}>Enter your peronan date</Text>
            </View>

            <View style={styles.formContianer}>
              <TextInput
                placeholder="Enter your Email"
                style={styles.input}
                placeholderTextColor="#000"
              />
              <TextInput
                placeholder="Create Password"
                style={styles.input}
                placeholderTextColor="#000"
              />
              
              <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Create Account</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginBox}>
              <Text style={styles.span}>You have not account??</Text>
              <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/register")}>  
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContianer: {
    width: "100%",
    height: "100%",
  },
  cover: {
    width: "100%",
    height: 1000,
    position: "absolute",
  },

  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: 35,
    flexDirection: "column",
    gap: 25,
  },
  btn: {
    width: "20%",
    height: 40,
  },
  forms: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 15,
    gap: 35,
  },
  headline: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: 15,
  },
  heading: {
    fontSize: 40,
    color: "#2A7B9B",
  },
  span: {
    fontSize: 18,
    color: "black",
  },
  formContianer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  input: {
    width: 300,
    borderColor: "#2A7B9B",
    borderWidth: 2,
    borderStyle: "solid",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: "#2A7B9B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 16,
    color: "white",
  },

  loginBox: {
    width: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
