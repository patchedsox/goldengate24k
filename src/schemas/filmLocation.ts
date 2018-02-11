export interface FilmLocationSchema {
  id: string;
  title: string;
  releaseYear: number;
  locations: string;
  funFacts: string;
  productionCompany: string;
  distributor: string;
  director: string;
  writer: string;
  actor_1: string;
  actor_2: string;
  actor_3: string;
  coordinateNotFound: boolean;
  coordinates: {
    lng: number,
    lat: number
  };
}