import { FC, ReactNode, useState } from "react";
import { useRouter } from "expo-router";
import { useTheme } from "@rneui/themed";

import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import ThemeChange from "../ThemeChange";

import BackIcon from "@/assets/icons/back.svg";
import ThemeIcon from "@/assets/icons/them.svg";

import getStyles from "./style";

import { useGetStyle } from "@/hooks/useGetStyle";

interface NavBarProps extends NativeStackHeaderProps {
  isBack?: boolean;
  isShowRight?: boolean | ReactNode;
}
const NavBar: FC<NavBarProps> = ({
  options,
  isBack = true,
  isShowRight = true,
}) => {
  const { theme } = useTheme();
  const { back } = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const styles = useGetStyle(getStyles);

  const handleGoBack = () => {
    back();
  };

  return (
    <View style={styles.nav_bar_box}>
      <View style={styles.back}>
        {isBack && (
          <TouchableOpacity onPress={handleGoBack}>
            <BackIcon
              fill={theme.colors.buttonSecondaryText}
              width={26}
              height={26}
            />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{options.title}</Text>
      {isShowRight === true && (
        <View style={styles.back}>
          <TouchableOpacity
            onPress={() => {
              setIsVisible(true);
            }}
          >
            <ThemeIcon
              fill={theme.colors.buttonSecondaryText}
              width={26}
              height={26}
            />
          </TouchableOpacity>
        </View>
      )}
      {typeof isShowRight === "object" && isShowRight}
      <ThemeChange
        isVisible={isVisible}
        close={() => {
          setIsVisible(false);
        }}
      />
    </View>
  );
};

export default NavBar;
