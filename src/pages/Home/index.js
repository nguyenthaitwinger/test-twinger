import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames/bind'
import React, { useEffect, useState } from 'react'
import { getListProjectCreator } from '../../redux/actions/testAction'
import { getListProject } from '../../services/testServices'
import { useDispatch, useSelector } from 'react-redux'
import Filter from './Components/Filter'
import ListProject from './Components/ListProject'
import Search from './Components/Search'
import Tags from './Components/Tags'
import styles from './home.module.scss'

const cx = classNames.bind(styles)

export default function Home() {

    const dispatch = useDispatch()
    const [page, setPage] = useState(1);
    const [s, setS] = useState('');
    const [orderBy, setOrderBy] = useState('createdAt');

    const [filter, setFilter] = useState({});

    const data = useSelector(state => state.testReducer.listProject);

    //React Query
    // const { isLoading, error, data } = useQuery([{ page, s, orderBy, ...filter }], getListProject);


    //middleware saga
    useEffect(() => {
        dispatch(getListProjectCreator({ page, s, orderBy, ...filter }))
    }, [page, s, orderBy, filter, dispatch])


    return (
        <div className={cx('home-wrapper')}>
            <div className={cx('heading')}>Project</div>
            <Search
                search={s}
                setSearch={setS}
            />
            <Filter
                setSort={setOrderBy}
                setFilter={setFilter}
                filters={filter}
            />

            <div className={cx('content')}>
                <Tags
                    filter={filter}
                    setFilter={setFilter}
                />
                <ListProject
                    page={page}
                    setPage={setPage}
                    listProject={data?.data}
                    total={data?.total}
                // isLoading={isLoading}
                // error={error}
                />
            </div>
        </div>

    )
}
