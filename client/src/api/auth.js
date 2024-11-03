import axios from "axios";

export const checkUsn = async (usn) => {
  const { data } = await axios.post("/api/v2/auth/check-usn", { usn });
  return data;
};

export const verifyUsn = async (payload) => {
  const { data } = await axios.post("/api/v2/auth/verify-usn", payload);
  return data;
};

export const signup = async (payload) => {
  const { data } = await axios.post("/api/v2/auth/signup", payload);
  return data;
};
