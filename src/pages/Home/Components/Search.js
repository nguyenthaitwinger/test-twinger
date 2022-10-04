import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../home.module.scss'
import SearchIcons from '../../../assets/images/Search'

const cx = classNames.bind(styles)

export default function Search(props) {

    const { setSearch } = props;

    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(value);
    }

    return (
        <div className={cx('input-wrap')}>
            <div className={cx('input-group')}>
                <form
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Search your projects"
                        onChange={(event) => { setValue(event.target.value) }}
                    />
                </form>
                <SearchIcons width={12} height={12} />
            </div>
        </div>
    )
}
