import axios from "axios";
import { DOMAIN } from "../config/base";

export const getListProject = async (data: any) => {
  const params = {
    ...data.queryKey[0],
    perPage: 6,
    order: "DESC",
    dealSizeMin: 0,
    dealSizeMax: 0,
  };

  const result = await axios.get(`${DOMAIN}/v1/investment/list`, { params });

  return result.data;
};

export const getListProjectSaga = (param: object) => {
  const params = {
    ...param,
    perPage: 6,
  };
  return axios.get(`${DOMAIN}/v1/investment/list`, { params });
};