import { Stack } from "expo-router";
import { ThemeProvider } from "@rneui/themed";
import NavBar from "@/components/NavBar";
import getTheme from "@/theme";

import { useAppStore } from "@/store";

export default function RootLayout() {
  const { theme: themeStore } = useAppStore();
  const theme = getTheme(themeStore);

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="welcome/index" options={{ headerShown: false }} />
        <Stack.Screen
          name="login/index"
          options={{ title: "Login", header: NavBar }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
