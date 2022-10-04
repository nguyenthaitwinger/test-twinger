import { Pagination } from 'antd';
import classNames from 'classnames/bind';
import React from 'react';
import styles from '../home.module.scss';

const cx = classNames.bind(styles)
const Bg1 = require('../../../assets/images/Project1.png');
const Calender = require('../../../assets/images/Calendar.png');
const Cup = require('../../../assets/images/Cup.png');
const Share = require('../../../assets/images/Share.png');

const listProduct = [
    {
        img: Bg1,
        title: 'Hộp đựng giấy lá chuối - Greenhopcom.com',
        tag: ['INTERNET', 'CODING', 'FOOD', 'TRAVELLING'],
        desc: 'TripAdvisor for Food - Discover culinary secrets worldwide',
        date: 'September 12, 2020'
    },
    {
        img: Bg1,
        title: 'Hộp đựng giấy lá chuối - Greenhopcom.com',
        tag: ['INTERNET', 'CODING', 'FOOD', 'TRAVELLING'],
        desc: 'TripAdvisor for Food - Discover culinary secrets worldwide',
        date: 'September 12, 2020'
    },
    {
        img: Bg1,
        title: 'Hộp đựng giấy lá chuối - Greenhopcom.com',
        tag: ['INTERNET', 'CODING', 'FOOD', 'TRAVELLING'],
        desc: 'TripAdvisor for Food - Discover culinary secrets worldwide',
        date: 'September 12, 2020'
    },
    {
        img: Bg1,
        title: 'Hộp đựng giấy lá chuối - Greenhopcom.com',
        tag: ['INTERNET', 'CODING', 'FOOD', 'TRAVELLING'],
        desc: 'TripAdvisor for Food - Discover culinary secrets worldwide',
        date: 'September 12, 2020'
    },
    {
        img: Bg1,
        title: 'Hộp đựng giấy lá chuối - Greenhopcom.com',
        tag: ['INTERNET', 'CODING', 'FOOD', 'TRAVELLING'],
        desc: 'TripAdvisor for Food - Discover culinary secrets worldwide',
        date: 'September 12, 2020'
    },
    {
        img: Bg1,
        title: 'Hộp đựng giấy lá chuối - Greenhopcom.com',
        tag: ['INTERNET', 'CODING', 'FOOD', 'TRAVELLING'],
        desc: 'TripAdvisor for Food - Discover culinary secrets worldwide',
        date: 'September 12, 2020'
    },
]


export default function ListProject() {
    return (
        <div className={cx('list-project-wrap')}>
            <div className={cx('title')}>
                32,956 projects found
            </div>
            <div className={cx('list-project')}>
                <div className={`row g-0 ${cx('project-row')}`}>
                    {listProduct.map((product, index) => {
                        return <div key={index} className={`col-md-6 col-lg-4 ${cx('project-col')}`}>
                            <div className={cx('project-item')}>
                                <div
                                    style={{ backgroundImage: `url('${product.img}')` }}
                                    className={cx('project-bg')}
                                >
                                    <div className={cx('img')}>
                                        <img src={Cup} alt="Cup" className={cx('cup')} />
                                        <img src={Share} alt="Share" className={cx('share')} />
                                    </div>
                                </div>
                                <div className={cx('project-content')}>
                                    <h3 className={cx('title')}>
                                        {product.title}
                                    </h3>
                                    <div className={cx('list-tag')}>
                                        {product.tag.map((itemTag, index) => {
                                            return <div key={index} className={cx('item')}>
                                                {itemTag}
                                            </div>
                                        })}

                                    </div>
                                    <div className={cx('desc')}>
                                        {product.desc}
                                    </div>
                                </div>
                                <div className={cx('project-footer')}>
                                    <div className={cx('date')}>
                                        <img src={Calender} alt="calendar" />
                                        <span>{product.date}</span>
                                    </div>
                                    <div className={cx('follow')}>
                                        <button>
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className={cx('pagination')}>
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    )
}
