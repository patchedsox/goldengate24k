import { RequestBody, ResponseBody } from './types';
import { GoldenGateHttp } from './provider';

export abstract class Requestable<I extends RequestBody, O extends ResponseBody> {
  constructor(public body: I) { }
  send(): Promise<O> {
    return GoldenGateHttp
      .provider
      .post<I, O>({ body: this.body })
      .then(result => result.body);
  }
}