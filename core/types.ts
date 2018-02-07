export interface Traceable {
  traceId: string;
}

export interface RequestBody extends Traceable {
}

export interface ResponseBody extends Traceable {
}