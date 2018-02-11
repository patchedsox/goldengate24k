import { RequestBody, ResponseBody, Action, ActionResponse } from './types';
export declare abstract class Requestable<I extends RequestBody, O extends ResponseBody> implements Action<I> {
    value: I;
    abstract type: string;
    constructor(value: I);
    send(): Promise<ActionResponse<O>>;
}
