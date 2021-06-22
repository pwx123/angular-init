import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle, UrlSegment } from '@angular/router';

export class ReuseStrategy implements RouteReuseStrategy {
  static cacheRouters = new Map<string, DetachedRouteHandle>();

  public static deleteRouteCache(url): void {
    if (ReuseStrategy.cacheRouters.has(url)) {
      const handle: any = ReuseStrategy.cacheRouters.get(url);
      try {
        handle.componentRef.destory();
      } catch (e) { }
      ReuseStrategy.cacheRouters.delete(url);
    }
  }

  public static deleteAllRouteCache(): void {
    ReuseStrategy.cacheRouters.forEach((handle: any, key) => {
      ReuseStrategy.deleteRouteCache(key);
    });
  }

  // one 进入路由触发，是否同一路由时复用路由
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig &&
      JSON.stringify(future.params) === JSON.stringify(curr.params);
  }

  // 获取存储路由
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    const url = this.getFullRouteURL(route);
    if (route.data.keep && ReuseStrategy.cacheRouters.has(url)) {
      return ReuseStrategy.cacheRouters.get(url);
    } else {
      return null;
    }
  }

  // 是否允许复用路由
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return Boolean(route.data.keep);
  }
  // 当路由离开时会触发，存储路由
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const url = this.getFullRouteURL(route);
    ReuseStrategy.cacheRouters.set(url, handle);
  }
  //  是否允许还原路由
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const url = this.getFullRouteURL(route);
    return Boolean(route.data.keep) && ReuseStrategy.cacheRouters.has(url);
  }

  // 获取当前路由url
  private getFullRouteURL(route: ActivatedRouteSnapshot): string {
    const { pathFromRoot } = route;
    let fullRouteUrlPath: string[] = [];
    pathFromRoot.forEach((item: ActivatedRouteSnapshot) => {
      fullRouteUrlPath = fullRouteUrlPath.concat(this.getRouteUrlPath(item));
    });
    return `/${fullRouteUrlPath.join('/')}`;

  }
  private getRouteUrlPath(route: ActivatedRouteSnapshot) {
    return route.url.map(urlSegment => urlSegment.path);
  }
}
