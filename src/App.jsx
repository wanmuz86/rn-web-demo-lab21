import React, { useState } from "react";
import { Platform, Alert } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

export default function App() {
  const [screen, setScreen] = useState("home");


  // This will have a platform check..
  // IIf it is web, we use the alert()
  // App - react-native-alert
  const handlePlatformAction = () => {
    Platform.OS === "web"
      ? alert("Hello from Web!")
      : Alert.alert("Hello from iOS!");
  };

  if (screen === "profile") {
    return <ProfileScreen onBack={() => setScreen("home")} />;
  }

  return (
    <HomeScreen
      onGoProfile={() => setScreen("profile")}
      onPlatformAction={handlePlatformAction}
    />
  );
}
