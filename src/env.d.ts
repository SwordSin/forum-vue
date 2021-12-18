/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

// declare module 'axios' {
//     // 定制业务相关的网络请求响应格式， T 是具体的接口返回类型数据
//     export interface CustomSuccessData {
//         status: number;
//         desc?: string;
//         data?: any;
//     }
// }

// declare AxiosResponse {

// }