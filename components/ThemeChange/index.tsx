import { FC } from "react";
import { View, Text } from "react-native";
import { Overlay, Button, Icon } from "@rneui/themed";
import { useTranslation } from "react-i18next";

import { useGetStyle } from "@/hooks/useGetStyle";
import { useAppStore } from "@/store";

import { getStyles } from "./style";

interface ThemeChangeProps {
  isVisible: boolean;
  close: () => void;
}

const ThemeChange: FC<ThemeChangeProps> = ({ isVisible, close }) => {
  const styles = useGetStyle(getStyles);
  const { theme, setTheme, setLanguage } = useAppStore();
  const { t, i18n } = useTranslation();

  const languageChange = (language: string) => {
    i18n.changeLanguage(language);
    setLanguage(language as "en" | "zh");
  };

  const changheTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
        <Icon
          name="close"
          containerStyle={{
            position: "absolute",
            top: 40, // 适配刘海屏
            right: 20,
            zIndex: 10,
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: 20,
            padding: 10,
          }}
          onPress={close}
        />
        <View style={styles.language_box}>
          <Button
            title={"English"}
            buttonStyle={{
              width: 150,
            }}
            onPress={() => {
              languageChange("en");
            }}
            type={i18n.language === "en" ? "solid" : "outline"}
          />
          <Button
            title={"繁體中文"}
            buttonStyle={{
              width: 150,
            }}
            onPress={() => {
              languageChange("zh");
            }}
            type={i18n.language === "zh" ? "solid" : "outline"}
          />
        </View>
        <Button
          title={theme === "dark" ? `${t("light_mode")}` : `${t("dark_mode")}`}
          onPress={changheTheme}
        ></Button>
      </View>
    </Overlay>
  );
};

export default ThemeChange;
