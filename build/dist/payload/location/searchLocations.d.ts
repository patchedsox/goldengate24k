import { RequestBody, ResponseBody, Requestable } from '../../core';
import { FilmLocationSchema } from '../../';
export interface SearchLocationsRequest extends RequestBody {
    take: number;
    skip: number;
    text: string;
}
export interface SearchLocationsResponse extends ResponseBody {
    locations: Array<FilmLocationSchema>;
    route: any;
}
export declare class SearchLocations extends Requestable<SearchLocationsRequest, SearchLocationsResponse> {
}
