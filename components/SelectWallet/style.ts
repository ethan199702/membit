import { StyleSheet } from "react-native";
import type { FullTheme } from "@rneui/themed";

const getStyles = (theme: FullTheme) =>
  StyleSheet.create({
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
    wallet_list_box: {},
  });

export { getStyles };
