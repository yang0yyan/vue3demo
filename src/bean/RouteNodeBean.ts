export interface RouteNodeBean {
  path: string;
  name: string;
  title: string;
  children: Array<RouteNodeBean> | null;
}
