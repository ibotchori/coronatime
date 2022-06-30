import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const getData = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };

  const response = await axios.get("/countries", config);
  return response.data;
};

const logIn = async (loginData: object) => {
  const response = await axios({
    method: "POST",
    url: "/login",
    data: loginData,
  });

  return response;
};
const signUp = async (signUpData: object) => {
  const response = await axios({
    method: "POST",
    url: "/register",
    data: signUpData,
  });

  return response;
};
const accountConfirmation = async (hash: object) => {
  const response = await axios({
    method: "POST",
    url: "/confirm-account",
    data: hash,
  });

  return response;
};
const passwordRecover = async (data: object) => {
  const response = await axios({
    method: "POST",
    url: "/password/recover",
    data: data,
  });

  return response;
};
const passwordRecoveryLink = async (data: object) => {
  const response = await axios({
    method: "POST",
    url: "/password/send-recovery-link",
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
