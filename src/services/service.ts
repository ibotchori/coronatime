import axios from "axios";
const API_URL = "https://coronatime-api.devtest.ge/api/countries";

const getData = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };

  const { data } = await axios.get(API_URL, config);
  return data;
};

const APIservice = {
  getData,
};

export default APIservice;
