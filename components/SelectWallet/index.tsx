import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CheckBox, Overlay } from "@rneui/themed";

import { useUserStore } from "@/store";

import { getStyles } from "./style";
import { useGetStyle } from "@/hooks/useGetStyle";
const SelectWallet = () => {
  const { user_info, connectWallet } = useUserStore();

  const styles = useGetStyle(getStyles);
  const [isVisible, setIsVisible] = useState(false);

  const openWalletList = () => {
    setIsVisible(true);
    console.log("🚀 ~ SelectWal ~ user_info:", connectWallet);
  };

  return (
    <View>
      <TouchableOpacity onPress={openWalletList}>
        <View style={styles.connected_wallet}>
          <Text style={styles.connected_wallet_text}>Connected Wallet</Text>
        </View>
      </TouchableOpacity>

      <Overlay
        isVisible={isVisible}
        animationType="fade"
        onBackdropPress={() => {
          setIsVisible(false);
        }}
      >
        <View style={styles.wallet_list_box}>
          {connectWallet.map((wallet) => {
            return (
              <View key={wallet} style={styles.wallet_list_item}>
                <CheckBox checked={wallet === user_info?.walletAddress}>
                  <Text style={styles.wallet_list_item_text}>{wallet}</Text>
                </CheckBox>
              </View>
            );
          })}
        </View>
      </Overlay>
    </View>
  );
};

export default SelectWallet;
