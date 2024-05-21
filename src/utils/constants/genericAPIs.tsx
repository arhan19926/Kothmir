import axios from "axios";
import { BACKEND_ROUTES } from "./common.constant";

export const validateUser = async () => {
  try {
    const response = await axios.get(
      BACKEND_ROUTES.AUTHENTICATION.VALIDATEUSER,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
