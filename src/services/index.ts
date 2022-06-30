import axios from "axios";
const API_URL = "https://coronatime-api.devtest.ge/api";

const getData = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };

  const response = await axios.get(API_URL + "/countries", config);
  return response.data;
};

const logIn = async (loginData: object) => {
  const response = await axios({
    method: "POST",
    url: API_URL + "/login",
    data: loginData,
  });

  return response;
};
const signUp = async (signUpData: object) => {
  const response = await axios({
    method: "POST",
    url: API_URL + "/register",
    data: signUpData,
  });

  return response;
};
const accountConfirmation = async (hash: object) => {
  const response = await axios({
    method: "POST",
    url: API_URL + "/confirm-account",
    data: hash,
  });

  return response;
};
const passwordRecover = async (data: object) => {
  const response = await axios({
    method: "POST",
    url: API_URL + "/password/recover",
    data: data,
  });

  return response;
};
const passwordRecoveryLink = async (data: object) => {
  const response = await axios({
    method: "POST",
    url: API_URL + "/password/send-recovery-link",
    data: data,
  });

  return response;
};

const APIservice = {
  getData,
  logIn,
  signUp,
  accountConfirmation,
  passwordRecover,
  passwordRecoveryLink,
};

export default APIservice;
