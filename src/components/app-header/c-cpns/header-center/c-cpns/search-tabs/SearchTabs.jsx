import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import classNames from "classnames";

const SearchTabs = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { titles, tabClick } = props;

  const itemClickHandle = (index) => {
    if (tabClick) tabClick(index)
    setCurrentIndex(index)
  };

  return (
    <TabsWrapper>
      <div className="title">
        {titles.map((item, index) => {
          return (
            <div
              onClick={e => itemClickHandle(index)}
              className={classNames("item", { active: currentIndex === index })}
            >
              {item}
            </div>
          );
        })}
      </div>
    </TabsWrapper>
  );
});

export default SearchTabs;
