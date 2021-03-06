import { RequestBody, ResponseBody, Action, ActionResponse } from './types';
export interface HttpRequest<T extends RequestBody> {
    body: Action<T>;
}
export interface HttpResponse<T extends ResponseBody> {
    status: number;
    body: ActionResponse<T>;
}
export interface GoldenGateHttpProvider {
    post<I extends RequestBody, O extends ResponseBody>(request: HttpRequest<I>): Promise<HttpResponse<O>>;
}
export declare class GoldenGateHttp {
    static provider: GoldenGateHttpProvider;
    static use(provider: GoldenGateHttpProvider): void;
}
