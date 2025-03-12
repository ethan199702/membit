import { Stack } from "expo-router";
import { ThemeProvider } from "@rneui/themed";
import theme from "@/theme";

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="welcome/index" options={{ headerShown: false }} />
        <Stack.Screen name="login/index" options={{ title: "Login" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
