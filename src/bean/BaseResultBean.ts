export interface BaseResultBean<T> {
  code: number;
  message: string;
  data: T;
}
