import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames/bind'
import styles from './home.module.scss'
import Search from './Components/Search'
import Filter from './Components/Filter'
import Tags from './Components/Tags'
import ListProject from './Components/ListProject'
import { getListProjectAction } from '../../redux/actions/testAction'

const cx = classNames.bind(styles)

export default function Home() {

    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('createdAt');

    const { listProject } = useSelector(state => state.testReducer);

    useEffect(() => {
        dispatch(getListProjectAction(currentPage, search, sort));
    }, [currentPage, search, sort, dispatch]);

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
                    listProject={listProject?.data}
                    total={listProject?.total}
                />
            </div>
        </div>

    )
}
