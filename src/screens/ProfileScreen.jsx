import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

export default function ProfileScreen({ onBack }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <AppButton title="Back to Home" onPress={onBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 20 },
});

