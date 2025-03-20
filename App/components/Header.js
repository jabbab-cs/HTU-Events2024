import React from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";

const HeaderBar = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require("../images/HTUeventsWhite.png")}
          style={styles.logoImage}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#e8343f",
  },
  container: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8343f",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  logoImage: {
    resizeMode: "contain",
    width: 140,
    height: 60,
  },
});

export default HeaderBar;
