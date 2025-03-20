import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ProfileScreen = ({ navigation }) => {
  const user = {
    name: "John Doe",
    studentId: "123456",
    email: "johndoe@htu.edu",
  };

  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.info}>Name: {user.name}</Text>
      <Text style={styles.info}>Student ID: {user.studentId}</Text>
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
