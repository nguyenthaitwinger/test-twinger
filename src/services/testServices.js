import axios from 'axios'
import { DOMAIN } from '../config/base'

export const getListProject = async ({ queryKey }) => {

    const params = {
        ...queryKey[0],
        perPage: 6,
        dealSizeMin: 0,
        dealSizeMax: 0
    };

    const result = await axios.get(`${DOMAIN}/v1/investment/list`, { params })

    return result.data;
}
// /v1/news/list?page=${page}&perPage=3&s=${search}&orderBy=${sort}&order=ASC&type=POST&status=PUBLISH&showMore=true