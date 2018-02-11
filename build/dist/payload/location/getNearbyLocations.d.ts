import { RequestBody, ResponseBody, Requestable } from '../../core';
import { FilmLocationSchema } from '../../';
export interface GetNearbyLocationsRequest extends RequestBody {
    radius: number;
    coordinates: {
        lng: number;
        lat: number;
    };
}
export interface GetNearbyLocationsResponse extends ResponseBody {
    locations: Array<FilmLocationSchema>;
}
export declare class GetNearbyLocations extends Requestable<GetNearbyLocationsRequest, GetNearbyLocationsResponse> {
    readonly type: string;
}
