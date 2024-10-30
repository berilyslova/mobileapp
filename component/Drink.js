import { Platform } from "react-native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Drink = () => {
  return (
    <View style={styles.container}>
      {" "}
      <Text style={styles.title}>Drink Menüsü</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
  },
});

export default Drink;
