import Toast from "react-native-toast-message";
import { Alert } from "react-native";

type TMethods = "get" | "post" | "delete" | "put";

interface RequestConfig {
  url: string;
  params?: Record<string, string>;
  data?: Record<string, any>;
  headers?: Record<string, string>;
}

interface IMessage {
  isShow?: boolean;
  message?: string;
}

const defaultHeaders = {
  "Content-Type": "application/json",
};

class RequestFetch {
  baseUrl: string;
  headers: Record<string, string>;

  constructor(url: string) {
    this.baseUrl = url;
    this.headers = { ...defaultHeaders };
  }
  setHeaders(headers = {}) {
    this.headers = { ...this.headers, ...headers };
  }
  /**
   * @description 格式化url
   * @param url 请求路径
   * @param params params参数
   * @returns {string}
   */
  formatUrl(url: string, params?: Record<string, string>): string {
    const queryString = new URLSearchParams(params || {}).toString();
    return `${this.baseUrl}${url}${queryString ? `?${queryString}` : ""}`;
  }
  async request(
    method: TMethods,
    options: RequestConfig,
    messageOptions?: IMessage
  ): Promise<any> {
    const { url, params, data, headers } = options;

    this.setHeaders(headers || {});

    const config = {
      method,
      headers: this.headers,
      body: data ? JSON.stringify(data) : undefined,
    };
    try {
      const fullUrl = this.formatUrl(url, params);

      const response = await fetch(fullUrl, config);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "请求失败, 请联系管理员");
      }
      const json = await response.json();
      console.log("🚀 ~ RequestFetch ~ json:", json);

      if ([200, 201, 0].includes(json.code)) {
        if (messageOptions?.isShow)
          requestAnimationFrame(() => {
            Toast.show({
              type: "success",
              text1: messageOptions.message || json.message,
            });
          });
        console.log("🚀 ~ RequestFetch ~ json:", json);

        return json.data || {};
      } else {
        if (messageOptions?.isShow)
          requestAnimationFrame(() => {
            Toast.show({
              type: "error",
              text1: messageOptions.message || json.message,
            });
          });

        throw new Error(json.message);
      }
    } catch (error) {
      throw new Error(
        typeof error === "string" ? error : "请求失败, 请联系管理员"
      );
    } finally {
    }
  }

  public async get(
    config: RequestConfig,
    messageOption?: IMessage
  ): Promise<any> {
    return this.request("get", config, messageOption);
  }

  public async post(
    config: RequestConfig,
    messageOption?: IMessage
  ): Promise<any> {
    return this.request("post", config, messageOption);
  }

  public async delete(
    config: RequestConfig,
    messageOption?: IMessage
  ): Promise<any> {
    return this.request("delete", config, messageOption);
  }

  public async put(
    config: RequestConfig,
    messageOption?: IMessage
  ): Promise<any> {
    return this.request("put", config, messageOption);
  }
}

const request = new RequestFetch("http://18.163.16.131:8080/api/v1");

export { request };

export default RequestFetch;
