import axios from "../global/axios";

export const initCharacters = async () => {
  return await axios.get("/");
};

export const searcCharacter = async (searchTerm) => {
  return await axios.get(`?q=${searchTerm}`);
};
