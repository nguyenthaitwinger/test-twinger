import axios from 'axios'
import { DOMAIN } from '../config/base'

export const getListProject = async ({ queryKey }) => {

    const params = {
        ...queryKey[0],
        perPage: 6,
        order: 'DESC',
        dealSizeMin: 0,
        dealSizeMax: 0
    };

    console.log(params);


    const result = await axios.get(`${DOMAIN}/v1/investment/list`, { params })

    return result.data;
}