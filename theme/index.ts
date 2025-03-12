import { createTheme } from "@rneui/themed";
import { DarkColor } from "./dark";
import { LightColor } from "./light";

const theme = createTheme({
  lightColors: LightColor,
  darkColors: DarkColor,
  mode: "light",
  components: {
    Button: (props, theme) => {
      return {
        buttonStyle: {
          backgroundColor:
            props.type === "solid"
              ? theme.colors.buttonPrimaryBg
              : theme.colors.buttonSecondaryBg,
          borderRadius: 25,
          height: 50,
        },
        titleStyle: {
          color:
            props.type === "solid"
              ? theme.colors.buttonPrimaryText
              : theme.colors.buttonSecondaryText,
        },
      };
    },
  },
});

export default theme;
