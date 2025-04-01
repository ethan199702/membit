import { StyleSheet } from "react-native";
import type { FullTheme } from "@rneui/themed";

const getStyles = (theme: FullTheme) =>
  StyleSheet.create({
    login_box: {
      margin: 20,
      marginTop: 100,
    },
    login_title_box: {
      display: "flex",
      flexDirection: "column",
    },
    login_title: {
      textAlign: "center",
      color: theme.colors.textPrimary,
      fontSize: 34,
      fontWeight: 700,
    },

    login_info: {
      color: theme.colors.textPrimary,
      fontSize: 13,
      textAlign: "center",
      marginTop: 10,
    },

    login_form_box: {
      marginTop: 50,
    },

    forget_password: {
      fontWeight: 400,
      fontSize: 13,
      color: theme.colors.textSecondary,
      marginTop: 20,
    },
  });

export { getStyles };
