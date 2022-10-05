import axios from 'axios'
import { DOMAIN } from '../config/base'

export const getListProject = async ({ queryKey }) => {
    const result = await axios({
        url: `${DOMAIN}/v1/news/search?page=${queryKey[0]}&s=${queryKey[1]}&perPage=6&orderBy=${queryKey[2]}&order=DESC`,
        method: 'GET'
    })

    return result.data;
}
// /v1/news/list?page=${page}&perPage=3&s=${search}&orderBy=${sort}&order=ASC&type=POST&status=PUBLISH&showMore=true