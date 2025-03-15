import { FC } from "react";
import { View, Text } from "react-native";
import { Overlay, Button } from "@rneui/themed";

import { useGetStyle } from "@/hooks/useGetStyle";
import { useAppStore } from "@/store";

import { getStyles } from "./style";

interface ThemeChangeProps {
  isVisible: boolean;
  close: () => void;
}

const ThemeChange: FC<ThemeChangeProps> = ({ isVisible, close }) => {
  const styles = useGetStyle(getStyles);
  const { theme, setTheme } = useAppStore();

  const changheTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");

    close();
  };
  return (
    <Overlay
      isVisible={isVisible}
      fullScreen
      onBackdropPress={close}
      overlayStyle={{
        backgroundColor: "rgba(0, 0, 0, 0.8)", // 黑色半透明背景
      }}
    >
      <View style={styles.theme_box}>
        <View style={styles.language_box}>
          <Button
            title={"English"}
            buttonStyle={{
              width: 175,
            }}
          />
          <Button
            title={"中文"}
            buttonStyle={{
              width: 175,
            }}
            type="solid"
          />
        </View>
        <Button
          title={theme === "dark" ? "Light mode" : "Dark mode"}
          onPress={changheTheme}
        ></Button>
      </View>
    </Overlay>
  );
};

export default ThemeChange;
