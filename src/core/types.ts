export interface Traceable {
  traceId?: string;
}

export interface RequestBody extends Traceable {
}

export interface ResponseBody extends Traceable {
}

export interface Action<T> {
  type: string;
  value: T;
}

export interface ActionResponse<T> {
  type: string;
  value: T;
}