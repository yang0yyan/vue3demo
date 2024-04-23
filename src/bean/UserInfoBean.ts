export interface UserInfoBean {
  userId: string;
  userName: string;
  userType: number;
  phone: string;
  email: string;
  gender: number;
  regionCode: string;
  dutyName: string;
  parentRegionCode: string;
  regionName: string;
  regionLevel: number;
  orgId: string;
  orgName: string;
  orgShortName: '';
  jobs: Array<string>;
  permissions: Array<string>;
}
