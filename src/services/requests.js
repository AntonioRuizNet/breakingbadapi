import { baseUrl } from "../constants/base";

export const getAllCharacters = () => {
  const url = `${baseUrl}/characters/`;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    });
};

export const getCharacter = (id) => {
  const url = `${baseUrl}/characters/${id}`;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    });
};

export const getCharacterQuote = (id) => {
  //const url = `${baseUrl}/quotes/${id}`;
  const url = `${baseUrl}/quote/random?id=${id}`;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    });
};
