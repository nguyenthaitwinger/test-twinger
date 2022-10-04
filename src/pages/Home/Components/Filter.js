import classNames from 'classnames/bind';
import React from 'react';
import styles from '../home.module.scss';
const cx = classNames.bind(styles);


const listFilter = [
    { name: 'Categories' },
    { name: 'Technology' },
    { name: 'Location' },
    { name: 'Badge' },
    { name: 'Stage' },
    { name: 'Looking for fund raising' },
]

const img1 = require('../../../assets/images/Filter.png');

export default function Filter() {
    return (
        <div className={cx('filter-wrapper')}>
            <h3 className={cx('title')}>
                Filters
            </h3>
            <div className={cx('list-filter')}>
                {listFilter.map((filter, index) => {
                    return <div key={index} className={cx('filter-item')}>
                        <select className={cx('filter-select')}>
                            <option>
                                {filter.name}
                            </option>
                        </select>
                        <img
                            src={img1} alt="filter"
                            width={12}
                            height={12}
                        />
                    </div>
                })}
                <div className={cx('last-item')}>
                    <div className={cx('separation')}></div>
                    <div className={cx('filter-item')}>
                        <select id='select' className={cx('filter-select')}>
                            <option>
                                Sort by
                            </option>
                        </select>
                        <img
                            src={require('../../../assets/images/Filter.png')} alt="filter"
                            width={12}
                            height={12}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
