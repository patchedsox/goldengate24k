import { RequestBody, ResponseBody } from './types';
export declare abstract class Requestable<I extends RequestBody, O extends ResponseBody> {
    body: I;
    constructor(body: I);
    send(): Promise<O>;
}
