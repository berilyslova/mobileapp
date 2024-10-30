import { Platform } from "react-native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/d8/24/0c/d8240c49041ccae1062317e286bb68b6.jpg",
        }}
        style={styles.logo}
      />
      <TouchableOpacity onPress={() => navigation.navigate(Food)}>
        <Text style={styles.title}>Yemek</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(Drink)}>
        <Text style={styles.title}>Drink</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(Sweet)}>
        <Text style={styles.title}>Tatlı</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
    textAlign: "center",
  },
});

export default Login;
