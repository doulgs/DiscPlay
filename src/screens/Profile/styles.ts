import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  user: {
    flexDirection: "row",
  },
  greeting: {
    fontFamily: theme.colors.heading,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 5,
  },
  username: {
    fontFamily: theme.fonts.text400,
  },
  message: {},
});
