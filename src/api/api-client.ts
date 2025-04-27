import axios from 'axios';
import {Breed} from "./types.ts";
import {getAllBreedsMapper} from "./mappers/get-all-breeds-mapper.ts";

const api = 'https://dog.ceo/api/'

export const getAllBreeds = (): Breed[] | any => axios.get(`${api}breeds/list/all `)
  .then(function (response) {
    return getAllBreedsMapper(response.data);
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  })

export const getImageByBreed = (breed: string) => axios.get(`${api}breed/${breed}/images `)
  .then(function (response) {
    return response.data.message;
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  })
export const getRandomImage = () => {
  axios.get(`${api}/breeds/image/random `)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}