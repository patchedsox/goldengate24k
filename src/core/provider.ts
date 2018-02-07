import { RequestBody, ResponseBody } from './types';

export interface HttpRequest<T extends RequestBody> {
  body: T;
}

export interface HttpResponse<T extends ResponseBody> {
  status: number;
  body: T;
}

export interface GoldenGateHttpProvider {
  post<I extends RequestBody, O extends ResponseBody>(request: HttpRequest<I>): Promise<HttpResponse<O>>;
}

export class GoldenGateHttp {
  static provider: GoldenGateHttpProvider;
  static use(provider: GoldenGateHttpProvider) {
    this.provider = provider;
  }
}