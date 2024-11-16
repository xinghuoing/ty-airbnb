import React, { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { CenterWrapper } from "./style";
import IconSearchBar from "@/assets/img/svg/icon-search-bar";
import SearchTabs from "./c-cpns/search-tabs/SearchTabs";
import SearchSeactions from "./c-cpns/search-sections/SearchSeactions";

import searchTitles from "@/assets/data/search_titles";

const HeaderCenter = memo((props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const titles = searchTitles.map((item) => item.title);
  const { isSearch, searchClick } = props;
  const tabClickHandle = (index) => {
    setTabIndex(index);
  };

  // 点击搜索按钮
  const searchClickHandle = () => {
    // 让父组件去处理逻辑
    if (searchClick) searchClick();
  };

  return (
    <CenterWrapper>
      {!isSearch && (
        <motion.div
          initial={{ opacity: 0, }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
          className="search-bar"
          onClick={searchClickHandle}
        >
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </motion.div>
      )}

      {isSearch && (
        <motion.div
          className="search-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SearchTabs
            titles={titles}
            tabClick={tabClickHandle}
            tabIndex={tabIndex}
          />
          <div className="infos">
            <AnimatePresence mode="wait">
              <motion.div
                key={tabIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3, ease: "linear" }}
                style={{ willChange: "transform, opacity" }}
              >
                <SearchSeactions
                  searchInfos={searchTitles[tabIndex].searchInfos}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </CenterWrapper>
  );
});

export default HeaderCenter;
