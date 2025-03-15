import { createTheme, InputProps } from "@rneui/themed";
import { DarkColor } from "./dark";
import { LightColor } from "./light";

const theme = (mode: "light" | "dark") =>
  createTheme({
    lightColors: LightColor,
    darkColors: DarkColor,
    mode,
    components: {
      Button: (props, theme) => {
        return {
          buttonStyle: {
            backgroundColor:
              props.type !== "solid"
                ? theme.colors.buttonPrimaryBg
                : theme.colors.buttonSecondaryBg,
            borderRadius: 30,
            height: 60,
            marginVertical: 10,
          },
          titleStyle: {
            color:
              props.type !== "solid"
                ? theme.colors.buttonPrimaryText
                : theme.colors.buttonSecondaryText,
          },
        };
      },
      Input: (props, theme) => {
        return {
          containerStyle: {
            paddingHorizontal: 0,
          },
          inputContainerStyle: {
            backgroundColor: theme.colors.pageSecondaryBg,
            borderColor: theme.colors.borderColor,
            borderRadius: 30,
            paddingHorizontal: 36,
            minHeight: 60,
          },
          placeholderTextColor: theme.colors.textSecondary,
          inputStyle: {
            fontSize: 16,
          },
        };
      },
    },
  });

export default theme;
