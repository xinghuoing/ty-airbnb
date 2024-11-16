import React, { memo } from "react";
import { TabsWrapper } from "./style";
import classNames from "classnames";

const SearchTabs = memo((props) => {
  const { titles, tabClick, tabIndex } = props;

  const itemClickHandle = (index) => {
    if (tabClick) tabClick(index)

  };

  return (
    <TabsWrapper>
      <div className="title">
        {titles.map((item, index) => {
          return (
            <div
              key={item}
              onClick={(e) => itemClickHandle(index)}
              className={classNames("item", { active: tabIndex === index })}
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
