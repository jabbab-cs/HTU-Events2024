import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const validUser = {
    email: "john.doe@htu.edu",
    password: "secret123",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === validUser.email && password === validUser.password) {
      navigation.replace("MainApp");
    } else {
      Alert.alert("Login Failed", "Your email or password is incorrect!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.buttonContainer}>
        <Button title="Log In" onPress={handleLogin} color="#fff" />
      </View>
      <Image
        source={require("../images/HTUevents.png")}
        style={styles.logoImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
    marginTop: -200,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    width: "60%",
    backgroundColor: "#e8343f",
    borderRadius: 5,
    marginTop: 10,
  },
  logoImage: {
    marginTop: 150,
    marginBottom: -600,
    resizeMode: "contain",
    width: "30%",
    height: "30%",
  },
});

export default LoginScreen;
