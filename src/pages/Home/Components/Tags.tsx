import classNames from "classnames/bind";
import React from "react";
import CloseIcons from "../../../assets/images/Close";
import styles from "../home.module.scss";

const cx = classNames.bind(styles);

export default function Tags(props: any) {
  const { filter, setFilter } = props;
  const listTag = [];
  for (let index in filter) {
    listTag.push({
      key: index,
      value: filter[index],
    });
  }

  const handleRemoveTag = (tag: string) => {
    setFilter((preState: any) => {
      delete preState[tag];
      return { ...preState };
    });
  };

  return (
    <div className={cx("list-tags")}>
      {listTag.map((tag, index) => {
        if (tag.value !== "")
          return (
            <div key={index} className={cx("tag-item")}>
              <span>{tag.value}</span>
              <div
                onClick={() => {
                  handleRemoveTag(tag.key);
                }}
              >
                <CloseIcons />
              </div>
            </div>
          );
      })}
    </div>
  );
}
