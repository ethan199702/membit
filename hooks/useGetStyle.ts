import { useTheme, FullTheme } from "@rneui/themed";

const useGetStyle = (getStyles: (theme: FullTheme) => any) => {
  const { theme } = useTheme();
  return getStyles(theme as FullTheme);
};

export { useGetStyle };
