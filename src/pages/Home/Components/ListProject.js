import { Pagination } from 'antd';
import classNames from 'classnames/bind';
import React from 'react';
import styles from '../home.module.scss';
import moment from 'moment';

const cx = classNames.bind(styles)
const Bg1 = require('../../../assets/images/Project1.png');
const Calender = require('../../../assets/images/Calendar.png');
const Cup = require('../../../assets/images/Cup.png');
const Share = require('../../../assets/images/Share.png');
const title = 'Hộp đựng giấy lá chuối - Greenhopcom.com';

export default function ListProject(props) {


    const { page, setPage, listProject, total, isLoading, error } = props;


    const totalPages = Math.ceil(total / 6);


    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className={cx('list-project-wrap')}>
            <div className={cx('title')}>
                {total} projects found
            </div>
            <div className={cx('list-project')}>
                <div className={`row g-0 ${cx('project-row')}`}>
                    {listProject?.map((project, index) => {
                        return <div key={index} className={`col-md-6 col-lg-4 ${cx('project-col')}`}>
                            <div className={cx('project-item')}>
                                <div
                                    style={{ backgroundImage: `url('${project.logo || Bg1}')` }}
                                    className={cx('project-bg')}
                                >
                                    <div className={cx('img')}>
                                        <img src={Cup} alt="Cup" className={cx('cup')} />
                                        <img src={Share} alt="Share" className={cx('share')} />
                                    </div>
                                </div>
                                <div className={cx('project-content')}>
                                    <h3 className={cx('title')}>
                                        {project.fullName || title}
                                    </h3>
                                    <div className={cx('list-tag')}>
                                        {project.coSecondaryCategories.map((itemTag, index) => {
                                            return <div key={index} className={cx('item')}>
                                                {itemTag.name}
                                            </div>
                                        })}
                                        <div key={index} className={cx('item')}>
                                            {project.coPrimaryCategory.name}
                                        </div>
                                    </div>
                                    <div className={cx('desc')}>
                                        {
                                            project.tagline
                                        }

                                    </div>
                                </div>
                                <div className={cx('project-footer')}>
                                    <div className={cx('date')}>
                                        <img src={Calender} alt="calendar" />
                                        <span>{moment(project.createdAt).format('YYYY/MM/DD')}</span>
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
                <Pagination
                    defaultCurrent={page}
                    total={totalPages * 10}
                    onChange={(page) => { setPage(page) }}
                />
            </div>
        </div>
    )
}
