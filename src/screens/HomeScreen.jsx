import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

export default function HomeScreen({ onGoProfile, onPlatformAction }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>
        Same JSX on iOS and Web
      </Text>

      <AppButton title="Go to Profile" onPress={onGoProfile} />
      <AppButton title="Platform Action" onPress={onPlatformAction} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    maxWidth: 480,
    alignSelf: "center",
  },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 8 },
  subtitle: { fontSize: 16, marginBottom: 20, textAlign: "center" },
});
