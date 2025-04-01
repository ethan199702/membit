import type { FullTheme } from "@rneui/themed";
import { StyleSheet } from "react-native";

const getStyles = (theme: FullTheme) =>
  StyleSheet.create({
    container: {
      height: 61,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.colors.pagePrimaryBg,
      paddingHorizontal: 20,
    },
    left_box: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    connected_wallet: {
      backgroundColor: theme.colors.moveBy,
      color: theme.colors.blackFontColor,
      borderRadius: 20,
      paddingLeft: 10,
      paddingRight: 10,
    },
    connected_wallet_text: {
      fontSize: 13,
      height: 34,
      lineHeight: 34,
    },
    back: {
      height: 30,
      width: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 8,
    },
  });

export { getStyles };
