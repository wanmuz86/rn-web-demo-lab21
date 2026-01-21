import { AppRegistry } from "react-native";
import App from "../src/App";

AppRegistry.registerComponent("rnWebDemo", () => App);

AppRegistry.runApplication("rnWebDemo", {
  rootTag: document.getElementById("root"),
});
