import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames/bind'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getListProject } from '../../services/testServices'
import Filter from './Components/Filter'
import ListProject from './Components/ListProject'
import Search from './Components/Search'
import Tags from './Components/Tags'
import styles from './home.module.scss'

const cx = classNames.bind(styles)

export default function Home() {

    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('createdAt');

    // const { listProject } = useSelector(state => state.testReducer);

    // useEffect(() => {
    //     dispatch(getListProjectAction(currentPage, search, sort));
    // }, [currentPage, search, sort, dispatch]);



    //React Query
    const { isLoading, error, data } = useQuery([currentPage, search, sort], getListProject)



    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message


    return (
        <div className={cx('home-wrapper')}>
            <div className={cx('heading')}>Project</div>
            <Search
                search={search}
                setSearch={setSearch}
            />
            <Filter
                setSort={setSort}
            />

            <div className={cx('content')}>
                <Tags />
                <ListProject
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    listProject={data?.data}
                    total={data?.total}
                />
            </div>
        </div>

    )
}
