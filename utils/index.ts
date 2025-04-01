import CryptoJS from "crypto-js";

export const hashWithSalt = (password: string, salt: string) => {
  const saltedData = password + salt;
  return CryptoJS.SHA256(saltedData).toString(CryptoJS.enc.Hex);
};
