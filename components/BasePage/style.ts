import { FullTheme } from "@rneui/themed";
import { StyleSheet } from "react-native";

const getStyles = (theme: FullTheme) =>
  StyleSheet.create({
    base_page: {
      backgroundColor: theme.colors.pagePrimaryBg,
      overflow: "visible",
      minHeight: "100%",
    },
  });

export { getStyles };
