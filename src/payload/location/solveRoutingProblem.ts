import { RequestBody, ResponseBody, Requestable } from '../../core';
import { FilmLocationSchema } from '../../';

export interface SolveRoutingProblemRequest extends RequestBody {
  coordinates: {
    lng: number;
    lat: number;
  };
}
export interface SolveRoutingProblemResponse extends ResponseBody {
  locationsWithRouteCoordinates: Array<FilmLocationSchema & { routeCoordinates: number[][] }>;
}
const TYPE = 'SolveRoutingProblem'

export class SolveRoutingProblem extends Requestable<SolveRoutingProblemRequest, SolveRoutingProblemResponse> {
  readonly type = TYPE;
}
