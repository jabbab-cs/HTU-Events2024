import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  ImageBackground,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const validUser = {
    email: "24110681@htu.edu.jo",
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
    <ImageBackground
      source={require("../images/bg.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.bubble}>
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
        </View>

        <Image
          source={require("../images/HTUm.png")}
          style={styles.logoImage}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  background: {
    flex: 1,
  },
  bubble: {
    width: "90%",
    backgroundColor: "#fff", // White background for the form
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: "center",
  },
});

export default LoginScreen;
