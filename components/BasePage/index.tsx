import { FC, ReactNode } from "react";
import { View } from "react-native";

import { getStyles } from "./style";

import { useGetStyle } from "@/hooks/useGetStyle";

interface BasePageProps {
  children: ReactNode;
}

const BasePage: FC<BasePageProps> = ({ children }) => {
  const styles = useGetStyle(getStyles);

  return <View style={styles.base_page}>{children}</View>;
};

export default BasePage;
