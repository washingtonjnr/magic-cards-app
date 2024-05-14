import { CardResponse } from "./card-response.type";

export type PackResponse = {
  code: string;
  type: string;
  name: string;
  block: string;
  releaseDate: string;
  //
  cards?: CardResponse[];
}
