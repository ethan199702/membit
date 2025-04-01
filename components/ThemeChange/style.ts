import { FullTheme } from "@rneui/themed";
import { StyleSheet } from "react-native";

const getStyles = (theme: FullTheme) =>
  StyleSheet.create({
    theme_box: {
      paddingTop: 300,
    },
    language_box: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    },
  });

export { getStyles };
