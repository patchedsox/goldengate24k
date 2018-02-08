import { RequestBody, ResponseBody, Action, ActionResponse } from './types';
import { GoldenGateHttp } from './provider';

export abstract class Requestable<I extends RequestBody, O extends ResponseBody> implements Action<I> {
  type: string;
  constructor(public value: I) {
    this.type = this.constructor.name;
  }
  send(): Promise<ActionResponse<O>> {
    return GoldenGateHttp
      .provider
      .post<I, O>({
        body: this
      })
      .then(result => result.body);
  }
}