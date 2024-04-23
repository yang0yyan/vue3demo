export interface RouteNodeBean {
  parentId: string;
  functionName: string;
  functionCode: string;
  permission: string | null;
  orderNum: number;
  headUrl: string | null;
  functionDesc: string | null;
  functionPath: string | null;
  functionType: number;
  systemCode: string;
  systemName: string;
  children: Array<RouteNodeBean> | null;
}
