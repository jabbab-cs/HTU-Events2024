import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ProfileScreen = ({ navigation }) => {
  const user = {
    name: "Mohammad Jarrar",
    email: "24110681@htu.edu.jo",
  };

  const extractStudentNumber = (email) => {
    return email.split("@")[0];
  };

  const studentId = extractStudentNumber(user.email);

  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.info}>Name: {user.name}</Text>
      <Text style={styles.info}>Student ID: {studentId}</Text>
      <Text style={styles.info}>Email: {user.email}</Text>

      <View>
        <Button title="Logout" onPress={handleLogout} color="red" />
      </View>
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProfileScreen;
