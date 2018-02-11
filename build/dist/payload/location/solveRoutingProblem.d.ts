import { RequestBody, ResponseBody, Requestable } from '../../core';
import { FilmLocationSchema } from '../../';
export interface SolveRoutingProblemRequest extends RequestBody {
    coordinates: {
        lng: number;
        lat: number;
    };
}
export interface SolveRoutingProblemResponse extends ResponseBody {
    locationsWithRouteCoordinates: Array<FilmLocationSchema & {
        routeCoordinates: number[][];
    }>;
}
export declare class SolveRoutingProblem extends Requestable<SolveRoutingProblemRequest, SolveRoutingProblemResponse> {
    readonly type: string;
}
