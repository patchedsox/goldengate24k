import { RequestBody, ResponseBody } from 'shared/golden-gate/core/types';
import { Requestable } from 'shared/golden-gate';

export interface GetNearbyLocationsRequest extends RequestBody {
  radius: string;
}
export interface GetNearbyLocationsResponse extends ResponseBody {
  locations: Array<{}>;
}

export class GetNearbyLocations extends Requestable<GetNearbyLocationsRequest, GetNearbyLocationsResponse> {
  static type: string = GetNearbyLocations.constructor.name;
}
