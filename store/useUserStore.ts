import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IUserState {
  user_info: Record<string, any>;
  connectWallet: string[];
  setUserInfo: (user_info: Record<string, any>) => void;
  setConnectWallet: (connectWallet: string[]) => void;
}

const useUserStore = create<IUserState>()(
  devtools(
    persist(
      (set) => ({
        user_info: {},
        connectWallet: [],
        setConnectWallet: (v: string[]) => {
          set({ connectWallet: v });
        },
        setUserInfo: (v: Record<string, any>) => {
          set({ user_info: v });
        },
      }),
      {
        name: "user-storage",
      }
    )
  )
);

export { useUserStore };
