import { RequestBody, ResponseBody, Requestable } from '../../core';
export interface SearchNearbyLocationsRequest extends RequestBody {
    radius: string;
}
export interface SearchNearbyLocationsResponse extends ResponseBody {
    locations: Array<{}>;
}
export declare class SearchNearbyLocations extends Requestable<SearchNearbyLocationsRequest, SearchNearbyLocationsResponse> {
}
