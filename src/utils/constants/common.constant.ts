export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
export const BASE_BACKEND_URL = import.meta.env.VITE_BASE_BACKEND_URL;

const AUTH = `authentication`;

export const BACKEND_ROUTES = {
  AUTHENTICATION: {
    VALIDATEUSER: `${BASE_BACKEND_URL}/${AUTH}/validateUser`,
    LOGIN: `${BASE_BACKEND_URL}/${AUTH}/google/redirect`,
  },
};

export interface IRecipeType {
  _id: string;
  id: string;
  __v: number;
  date: string;
  description: string;
  imageUrl: string;
  name: string;
  origin: string;
  veg: boolean;
}