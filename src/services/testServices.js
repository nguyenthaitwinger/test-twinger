import axios from 'axios'
import { DOMAIN } from '../config/base'

export const getListProject = (page, search, sort) => {
    return axios({
        url: `${DOMAIN}/v1/news/search?page=${page}&s=${search}&perPage=6&orderBy=${sort}&order=DESC`,
        method: 'GET'
    })
}
// /v1/news/list?page=${page}&perPage=3&s=${search}&orderBy=${sort}&order=ASC&type=POST&status=PUBLISH&showMore=true