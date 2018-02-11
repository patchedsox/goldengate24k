import { RequestBody, ResponseBody, Requestable } from '../../core';
import { FilmLocationSchema } from '../../';

export interface SolveRoutingProblemRequest extends RequestBody {
  coordinates: {
    lng: number;
    lat: number;
  };
}
export interface SolveRoutingProblemResponse extends ResponseBody {
  // tslint:disable-next-line:no-any
  locationsWithRouteCoordinates: Array<FilmLocationSchema & { routeCoordinates: number[][] }>;
}

export class SolveRoutingProblem extends Requestable<SolveRoutingProblemRequest, SolveRoutingProblemResponse> { }