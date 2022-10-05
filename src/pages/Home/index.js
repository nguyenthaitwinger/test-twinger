import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames/bind'
import React, { useState } from 'react'
import { getListProject } from '../../services/testServices'
import Filter from './Components/Filter'
import ListProject from './Components/ListProject'
import Search from './Components/Search'
import Tags from './Components/Tags'
import styles from './home.module.scss'

const cx = classNames.bind(styles)

export default function Home() {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('createdAt');

    const [filter, setFilter] = useState({

    });

    //React Query
    const { isLoading, error, data } = useQuery([{ page, search, sort, ...filter }], getListProject);



    return (
        <div className={cx('home-wrapper')}>
            <div className={cx('heading')}>Project</div>
            <Search
                search={search}
                setSearch={setSearch}
            />
            <Filter
                setSort={setSort}
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
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </div>

    )
}
