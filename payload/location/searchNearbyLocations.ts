import { RequestBody, ResponseBody } from 'shared/golden-gate/core/types';
import { Requestable } from 'shared/golden-gate';

export interface SearchNearbyLocationsRequest extends RequestBody {
  radius: string;
}
export interface SearchNearbyLocationsResponse extends ResponseBody {
  locations: Array<{}>;
}

export class SearchNearbyLocations extends Requestable<SearchNearbyLocationsRequest, SearchNearbyLocationsResponse> {
  static type = SearchNearbyLocations.constructor.name;
}
