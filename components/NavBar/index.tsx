import { FC } from "react";
import { useTheme } from "@rneui/themed";

import { View, Text } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import BackIcon from "@/assets/icons/back.svg";

import getStyles from "./style";

interface NavBarProps extends NativeStackHeaderProps {
  isBack?: boolean;
}
const NavBar: FC<NavBarProps> = ({ options, isBack = true }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.nav_bar_box}>
      <View style={styles.back}>
        {isBack && (
          <BackIcon
            fill={theme.colors.buttonSecondaryText}
            width={26}
            height={26}
          />
        )}
      </View>
      <Text style={styles.title}>{options.title}</Text>
      <View style={styles.right}></View>
    </View>
  );
};

export default NavBar;
