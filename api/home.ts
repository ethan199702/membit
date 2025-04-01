import { request } from "@/service";

export const member_salt = async (params: any) =>
  request.get({ url: "/member/salt", params }, { isShow: true });

export const member_login = async (params: any) =>
  request.post({ url: "/member/login", params }, { isShow: false });

export const connect_wallet = async () =>
  request.get({ url: "/connect-wallet" }, { isShow: false });
