export interface RouteNodeBean {
    "parentId": string,
    "functionName": string,
    "functionCode": string,
    "permission": string,
    "orderNum": number,
    "headUrl": string,
    "functionDesc": string,
    "functionPath": string,
    "functionType": number,
    "systemCode": string,
    "systemName": string,
    "children": Array<RouteNodeBean>
}