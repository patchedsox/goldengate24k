import { RequestBody, ResponseBody } from './types';

export abstract class Requestable<I extends RequestBody, O extends ResponseBody> {
  constructor(public body: I) { }
  send(): Promise<O> {
    return Promise.resolve(<O>{});
  }
}