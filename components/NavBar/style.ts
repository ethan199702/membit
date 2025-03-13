import { StyleSheet } from "react-native";
import { FullTheme } from "@rneui/themed";

const getStyles = (theme: FullTheme) =>
  StyleSheet.create({
    nav_bar_box: {
      height: 60,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.colors.pagePrimaryBg,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      color: theme.colors.buttonSecondaryText,
    },
    back: {
      height: 55,
      width: 55,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      backgroundColor: theme.colors.pageSecondaryBg,
    },

    right: {
      height: 55,
      width: 55,
    },
  });

export default getStyles;
