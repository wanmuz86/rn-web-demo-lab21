import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function AppButton({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
      accessibilityRole="button"
      accessible
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 6,
    minWidth: 180,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});
