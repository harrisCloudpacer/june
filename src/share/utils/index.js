// PACKAGES
// import jwt from "jsonwebtoken"; // TODO: remove webpack error v5
// // CONSTANTS
// import { JWT } from "../constants/";

export const login = (user) => {
  return 'jwt.sign({ user }, JWT.secret, { expiresIn: JWT.expiresIn })';
};
