import React from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames/bind'
import styles from './home.module.scss'
import Search from './Components/Search'
import Filter from './Components/Filter'
import Tags from './Components/Tags'
import ListProject from './Components/ListProject'

const cx = classNames.bind(styles)

export default function Home() {

    const listProduct = useSelector(state => state.testReducer);


    return (
        <div className={cx('home-wrapper')}>
            <div className={cx('heading')}>Project</div>
            <Search />
            <Filter />

            <div className={cx('content')}>
                <Tags />
                <ListProject />
            </div>
        </div>

    )
}
