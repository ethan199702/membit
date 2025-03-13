import { Theme } from "@rneui/themed";

declare module "*.svg" {
  import * as React from "react";
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module "@rneui/themed" {
  // 扩展 Theme 类型，添加自定义的颜色
  export interface Colors {
    buttonPrimaryBg: string;
    buttonPrimaryText: string;
    buttonSecondaryBg: string;
    buttonSecondaryText: string;
    pagePrimaryBg: string;
    pageSecondaryBg: string;
  }
}
