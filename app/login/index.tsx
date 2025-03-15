import { View, Text } from "react-native";

import { Input, Button } from "@rneui/themed";
import BasePage from "@/components/BasePage";

import { useGetStyle } from "@/hooks/useGetStyle";
import { getStyles } from "./style";

const Login = () => {
  const styles = useGetStyle(getStyles);
  return (
    <BasePage>
      <View style={styles.login_box}>
        <Text style={styles.login_info}>
          Make the transaction more valuable, make the transaction extremely
          convenient.
        </Text>

        <View style={styles.login_form_box}>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
        </View>
        <Button title={"Login"}></Button>
        <Text style={styles.forget_password}>Forget password? </Text>
      </View>
    </BasePage>
  );
};
export default Login;
