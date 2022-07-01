import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Touch, StyleSheet } from "react-native";
import { Linking } from "react-native";
const Login = () => {
  const [start, setStart] = useState(false);
  console.log(start)
  return (
    <View style={[styles.backgroundImage, styles.container]}>
      <StatusBar style="auto" />
      <Text
        style={styles.btn}
        onPress={() => setStart(!start)}
      >
        Login
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
  backgroundImage: {
    backgroundImage:
      "url(https://images.pexels.com/photos/11230267/pexels-photo-11230267.jpeg?cs=srgb&dl=pexels-federica-gioia-11230267.jpg&fm=jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },
  btn: {
    borderRadius: "1rem",
    padding: "10px",
    backgroundImage:" linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%)",
    color: '#fff',
  },
});
export default Login;
