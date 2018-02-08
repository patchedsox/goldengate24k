import { RequestBody, ResponseBody, Requestable } from '../../core';

export interface SearchNearbyLocationsRequest extends RequestBody {
  radius: string;
}
export interface SearchNearbyLocationsResponse extends ResponseBody {
  locations: Array<{}>;
}

export class SearchNearbyLocations extends Requestable<SearchNearbyLocationsRequest, SearchNearbyLocationsResponse> { }
