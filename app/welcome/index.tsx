import { View, Text, Image } from "react-native";
import { router } from "expo-router";
import { Button } from "@rneui/themed";
import styles from "./styles";

const Welcome = () => {
  return (
    <View style={styles.welcome_page}>
      <View style={styles.welcome_box}>
        <Text style={styles.welcome_title}>Crypto meme</Text>
        <Text style={styles.welcome_info_text}>
          Search and analyze meme tokens to find wealth codes.
        </Text>
        <Image
          source={require("../../assets/images/welcome.png")}
          style={styles.welcome_image_box}
        />
        <Button
          title={"Login"}
          buttonStyle={{ backgroundColor: "#fff" }}
          titleStyle={{ color: "#000" }}
          onPress={() => {
            router.push("/login");
          }}
        ></Button>
        <Button
          title={"Register"}
          buttonStyle={{
            backgroundColor: "#000",
            borderColor: "#303030",
            borderWidth: 2,
            marginTop: 20,
          }}
          titleStyle={{ color: "#fff" }}
        ></Button>
      </View>
    </View>
  );
};

export default Welcome;
