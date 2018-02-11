import { RequestBody, ResponseBody, Action, ActionResponse } from './types';
import { GoldenGateHttp } from './provider';
import { HttpRequest } from '../';
import { Uuid } from './uuid';

export abstract class Requestable<I extends RequestBody, O extends ResponseBody> implements Action<I> {
  abstract type: string;
  constructor(public value: I) { }
  send(): Promise<ActionResponse<O>> {
    let body = <HttpRequest<I>>{
      body: {
        type: this.type,
        value: this.value
      }
    };

    body.body.value.traceId = Uuid.v4();

    return GoldenGateHttp
      .provider
      .post<I, O>(body)
      .then(result => result.body);
  }
}