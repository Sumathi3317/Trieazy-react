import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { setLoading } from "./Screen/loader";
axios.defaults.baseURL = "https://dev.trieazy.com/api/v2/";

export default function App() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [errortext, setErrortext] = useState("");

  const onPressLogin = () => {
    setErrortext("");

    if (!email) {
      alert("Please fill Email");
      return;
    }
    if (!password) {
      alert("Please fill Password");
      return;
    }
    setLoading(true);

    let dataToSend = {
      email: email.email,
      password: password.password,
      identity_matrix: "NullJungle.com",
      user_type: "customer",
    };
    axios
      .post("auth/login", dataToSend)
      .then(({ data }) => {
        console.log("muthu");
      })
      .catch(({ response }) => {
        console.log(response.status);
      });

    console.log(dataToSend);
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}> Login Screen</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail({ email: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword({ password: text })}
        />
      </View>
      {errortext != "" ? (
        <Text style={styles.errorTextStyle}>{errortext}</Text>
      ) : null}

      <TouchableOpacity onPress={onPressForgotPassword}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressSignUp}>
        <Text style={styles.inputText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: "block",
  },
  textsyle: {
    backgroundColor: "red",
    fontSize: 12,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#3AB4BA",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgotAndSignUpText: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});
