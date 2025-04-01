import { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { ThemeProvider } from "@rneui/themed";
import { I18nextProvider, useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Toast from "react-native-toast-message";

import NavBar from "@/components/NavBar";
import getTheme from "@/theme";

import { useAppStore } from "@/store";
import i18n from "@/locales";

export default function RootLayout() {
  const { theme: themeStore } = useAppStore();
  const router = useRouter();
  const { t } = useTranslation();
  const theme = getTheme(themeStore);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const address = await AsyncStorage.getItem("address");
        console.log("🚀 ~ checkLoginStatus ~ address:", address);

        // if (address) router.replace("/(tabs)/Home");
      } catch (error) {
        console.log(error);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <Stack>
          <Stack.Screen name="welcome/index" options={{ headerShown: false }} />
          <Stack.Screen
            name="login/index"
            options={{ title: `${t("login")}`, header: NavBar }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <Toast />
      </ThemeProvider>
    </I18nextProvider>
  );
}
