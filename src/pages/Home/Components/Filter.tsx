import classNames from "classnames/bind";
import React from "react";
import styles from "../home.module.scss";
const cx = classNames.bind(styles);

const listFilter = [
  {
    name: "category",
    option: ["3D Technology", "3D Printing", "Ad Exchange", "A/B Testingss"],
  },
  {
    name: "technologies",
    option: [
      "Agricultural robotics",
      "Advanced materialss",
      "Agriculture machines",
      "Airless tires",
    ],
  },
  { name: "location", option: ["Afghanistan", "Albania", "Vietnam"] },
  { name: "badge", option: ["Lab2Market", "Marketing Competition"] },
];

const img1 = require("../../../assets/images/Filter.png");

export default function Filter(props: any) {
  const { setSort, setFilter, filters } = props;

  return (
    <div className={cx("filter-wrapper")}>
      <h3 className={cx("title")}>Filters</h3>
      <div className={cx("list-filter")}>
        {listFilter.map((filter, index) => {
          return (
            <div key={index} className={cx("filter-item")}>
              <select
                defaultValue=""
                value={filters[filter.name] || ""}
                name={filter.name}
                className={cx("filter-select")}
                onChange={(event) => {
                  setFilter((prestate: any) => {
                    return {
                      ...prestate,
                      [event.target.name]: event.target.value,
                    };
                  });
                }}
              >
                <option value="" hidden>
                  {filter.name}
                </option>
                {filter?.option.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <img src={img1} alt="filter" width={12} height={12} />
            </div>
          );
        })}

        {/* sort */}
        <div className={cx("last-item")}>
          <div className={cx("separation")}></div>
          <div className={cx("filter-item")}>
            <select
              defaultValue=""
              id="select"
              className={cx("filter-select")}
              onChange={(event) => {
                setSort(event.target.value);
              }}
            >
              <option value="" hidden>
                Sort by
              </option>
              <option value="createdAt">Mới nhất</option>
              <option value="fullName">Tiêu đề</option>
              <option value="followers">Phổ biến</option>
            </select>
            <img
              src={require("../../../assets/images/Filter.png")}
              alt="filter"
              width={12}
              height={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
