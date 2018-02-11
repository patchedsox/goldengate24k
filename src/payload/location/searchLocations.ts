import { RequestBody, ResponseBody, Requestable } from '../../core';
import { FilmLocationSchema } from '../../';

export interface SearchLocationsRequest extends RequestBody {
  take: number;
  skip: number;
  text: string;
}
export interface SearchLocationsResponse extends ResponseBody {
  locations: Array<FilmLocationSchema>;
  // tslint:disable-next-line:no-any
  route: any;
}

export class SearchLocations extends Requestable<SearchLocationsRequest, SearchLocationsResponse> {
  readonly type = 'SearchLocations';
}
