import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo(() => {
  const [selectItem, setSelectItem] = useState([]);

  const handleItemClick = (item) => {
    let newItem = [...selectItem];
    if (!newItem.includes(item)) {
      newItem.push(item);
    } else {
      newItem = newItem.filter((filterItem) => filterItem !== item);
    }
    setSelectItem(newItem);
  };
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("item", {'active': selectItem.includes(item)})}
              key={item}
              onClick={(e) => handleItemClick(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
