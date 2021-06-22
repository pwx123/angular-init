export const env = {
  Api(appId: number) {
    return "/app/data/api/" + appId;
  },
  ApiFull(url: string) {
    return "http://www.lunan" + url; //兼容老版本
  }
}
