import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@rneui/themed";

import { useGetStyle } from "@/hooks/useGetStyle";
import SelectWallet from "../SelectWallet";

import LogoIcon from "@/assets/icons/logo.svg";
import ThemeIcon from "@/assets/icons/them.svg";
import ThemeChange from "../ThemeChange";

import { getStyles } from "./style";

const MainNavBar = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const styles = useGetStyle(getStyles);
  return (
    <View style={styles.container}>
      <View>
        <LogoIcon
          width={100}
          height={30}
          fill={theme.colors.buttonSecondaryText}
        />
      </View>
      <View style={styles.left_box}>
        <SelectWallet />

        <View style={styles.back}>
          <TouchableOpacity
            onPress={() => {
              setIsVisible(true);
            }}
          >
            <ThemeIcon
              fill={theme.colors.buttonSecondaryText}
              width={20}
              height={20}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ThemeChange
        isVisible={isVisible}
        close={() => {
          setIsVisible(false);
        }}
      />
    </View>
  );
};

export default MainNavBar;
