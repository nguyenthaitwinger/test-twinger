import classNames from 'classnames/bind'
import React from 'react'
import CloseIcons from '../../../assets/images/Close'
import styles from '../home.module.scss'

const cx = classNames.bind(styles)


const listTags = [
    { content: 'INTERNET' },
    { content: 'CODING' },
    { content: 'FOOD' },
    { content: 'FOOD' },
]

export default function Tags() {
    return (
        <div className={cx('list-tags')}>
            {listTags.map((tag, index) => {
                return <div key={index} className={cx('tag-item')}>
                    <span>{tag.content}</span>
                    <CloseIcons />
                </div>
            })}

        </div>
    )
}
