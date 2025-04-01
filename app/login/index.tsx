import { useState } from "react";
import { useRouter } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";

import { Input, Button, Icon } from "@rneui/themed";

import { useTranslation } from "react-i18next";

import BasePage from "@/components/BasePage";

import { useGetStyle } from "@/hooks/useGetStyle";

import { member_salt, member_login, connect_wallet } from "@/api/home";

import { hashWithSalt } from "@/utils";

import { useUserStore } from "@/store";

import { getStyles } from "./style";

const Login = () => {
  const { t } = useTranslation();

  const { setUserInfo, setConnectWallet } = useUserStore();
  const router = useRouter();
  const styles = useGetStyle(getStyles);
  const [secure, setSecure] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    let { email, password } = form;

    const res = await member_salt({ email });
    const { salt } = res;
    password = hashWithSalt(password, salt);
    const res2 = await member_login({ email, password });

    setUserInfo(res2.user || {});

    const res3 = await connect_wallet();

    setConnectWallet(res3.list || []);
    router.replace("/(tabs)/Home");
    AsyncStorage.setItem("address", res2.user.address);
  };
  return (
    <BasePage>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.login_box}>
          <View style={styles.login_title_box}>
            <Text style={styles.login_title}>{t("welcome_Membit")}</Text>
            <Text style={styles.login_info}>{t("welcome_desc")}</Text>
          </View>

          <View style={styles.login_form_box}>
            <Input
              placeholder={`${t("email")}`}
              value={form.email}
              onChangeText={(v: string) =>
                setForm((f) => ({
                  ...f,
                  email: v,
                }))
              }
            />
            <Input
              placeholder={`${t("password")}`}
              value={form.password}
              secureTextEntry={secure}
              leftIcon={{ type: "font-awesome", name: "lock" }}
              rightIcon={
                <Icon
                  type="font-awesome"
                  name={secure ? "eye-slash" : "eye"}
                  onPress={() => setSecure(!secure)}
                />
              }
              onChangeText={(v: string) =>
                setForm((f) => ({
                  ...f,
                  password: v,
                }))
              }
            />
          </View>
          <Button title={`${t("login")}`} onPress={handleLogin}></Button>
          <Text style={styles.forget_password}>
            {`${t("forget_password")}`}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </BasePage>
  );
};
export default Login;
