import { View, Text } from "react-native";

import styles from "./style";
const NavBar = (props) => {
  console.log("🚀 ~ NavBar ~ props:", props);

  return (
    <View style={styles.nav_bar_box}>
      <Text>NavBar</Text>
    </View>
  );
};

export default NavBar;
