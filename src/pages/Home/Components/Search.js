import React from 'react'
import classNames from 'classnames/bind'
import styles from '../home.module.scss'
import SearchIcons from '../../../assets/images/Search'

const cx = classNames.bind(styles)

export default function Search() {
    return (
        <div className={cx('input-wrap')}>
            <div className={cx('input-group')}>
                <input
                    type="text"
                    placeholder="Search your projects"
                />
                <SearchIcons width={12} height={12} />
            </div>
        </div>
    )
}
