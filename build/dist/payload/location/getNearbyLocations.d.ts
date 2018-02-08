import { RequestBody, ResponseBody, Requestable } from '../../core';
export interface GetNearbyLocationsRequest extends RequestBody {
    radius: string;
}
export interface GetNearbyLocationsResponse extends ResponseBody {
    locations: Array<{}>;
}
export declare class GetNearbyLocations extends Requestable<GetNearbyLocationsRequest, GetNearbyLocationsResponse> {
}
