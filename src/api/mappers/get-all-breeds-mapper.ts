import { Breed } from "../types.ts";

interface GetAllBreedsParams {
  message: Breed[]
}

export const getAllBreedsMapper = (data: GetAllBreedsParams) => data.message