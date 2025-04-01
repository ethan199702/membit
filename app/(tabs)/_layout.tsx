import { Tabs } from "expo-router";

import MainNavBar from "@/components/MainNavBar";
import HomeIcon from "@/assets/icons/home.svg";
import JmIcon from "@/assets/icons/jm.svg";
import SettingIcon from "@/assets/icons/setting.svg";
import MyIcon from "@/assets/icons/my.svg";
import { useTheme } from "@rneui/themed";

const TabLayout = () => {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.textPrimary,
        tabBarInactiveTintColor: "#ADADAD",
        headerStyle: {
          backgroundColor: "#fff",
        },

        headerTintColor: "#000",
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Tabs.Screen
        name="Home/index"
        options={{
          title: "home",
          tabBarIcon: ({ color }) => (
            <HomeIcon width={26} height={26} fill={color} />
          ),
          header: () => <MainNavBar />,
        }}
      />

      <Tabs.Screen
        name="Strategy/index"
        options={{
          title: "Strategy",
          tabBarIcon: ({ color }) => (
            <JmIcon width={26} height={26} fill={color} />
          ),
          header: () => <MainNavBar />,
        }}
      />
      <Tabs.Screen
        name="Setting/index"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => (
            <SettingIcon width={26} height={26} fill={color} />
          ),
          header: () => <MainNavBar />,
        }}
      />
      <Tabs.Screen
        name="My/index"
        options={{
          title: "My",
          tabBarIcon: ({ color }) => (
            <MyIcon width={26} height={26} fill={color} />
          ),
          header: () => <MainNavBar />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
