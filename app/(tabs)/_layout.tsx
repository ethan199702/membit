import { Tabs } from "expo-router";
import HomeIcon from "@/assets/icons/home.svg";
import JmIcon from "@/assets/icons/jm.svg";
import SettingIcon from "@/assets/icons/setting.svg";
import MyIcon from "@/assets/icons/my.svg";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#ADADAD",
        headerStyle: {
          backgroundColor: "#fff",
        },

        headerTintColor: "#000",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          tabBarIcon: ({ color }) => (
            <HomeIcon width={26} height={26} fill={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Strategy/index"
        options={{
          title: "Strategy",
          tabBarIcon: ({ color }) => (
            <JmIcon width={26} height={26} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Setting/index"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => (
            <SettingIcon width={26} height={26} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="My/index"
        options={{
          title: "My",
          tabBarIcon: ({ color }) => (
            <MyIcon width={26} height={26} fill={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
