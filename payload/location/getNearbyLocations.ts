import { RequestBody, ResponseBody } from 'shared/goldengate24k';
import { Requestable } from 'shared/goldengate24k';

export interface GetNearbyLocationsRequest extends RequestBody {
  radius: string;
}
export interface GetNearbyLocationsResponse extends ResponseBody {
  locations: Array<{}>;
}

export class GetNearbyLocations extends Requestable<GetNearbyLocationsRequest, GetNearbyLocationsResponse> {
  static type: string = GetNearbyLocations.constructor.name;
}
