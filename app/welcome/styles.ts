import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  welcome_page: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  welcome_box: {},
  welcome_info_text: {
    fontSize: 12,
    color: "#606060",
    textAlign: "center",
  },
  welcome_title: {
    color: "#ffffff",
    fontSize: 45,
    fontWeight: 600,
    textAlign: "center",
  },
  welcome_image_box: {
    width: 362,
    height: 362,
  },
});

export default styles;
