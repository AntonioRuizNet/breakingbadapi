import { baseUrl } from "../constants/base";

export const getAllCharacters = () => {
  const url = `${baseUrl}/characters/`;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};

export const getCharacter = (id) => {
  const url = `${baseUrl}/characters/${id}`;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};
