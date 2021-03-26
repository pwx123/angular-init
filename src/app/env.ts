export const env = {
  Api(appId: number) {
    const host = window.location.host;
    if (host.startsWith("localhost"))
      return "/app/data/api/" + appId;
    else if (!host || /moa.lunan.com.cn/i.test(host))
      return "https://moa.lunan.com.cn/client/app/data/api/" + appId;
    else
      return "/app/data/api/" + appId;
  },
  ApiFull(url: string) {
    const host = window.location.host;
    if (host.startsWith("localhost"))
      return url;
    else if (!host || /moa.lunan.com.cn/i.test(host))
      return "https://moa.lunan.com.cn/client" + url;
    else
      return "http://www.lunan" + url; //兼容老版本
  }
}
