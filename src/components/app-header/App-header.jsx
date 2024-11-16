import React, { memo, useCallback, useRef, useState } from "react";
import HeaderLeft from "./c-cpns/header-left/HeaderLeft";
import HeaderCenter from "./c-cpns/header-center/HeaderCenter";
import HeaderRight from "./c-cpns/header-right/HeaderRight";

import { HeaderWrapper, SearchWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { ThemeProvider } from "styled-components";

const Header = memo(() => {
  const [isSearch, setIsSearch] = useState(false);

  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed, topAlpha } = headerConfig;

  // 处理搜索打开逻辑
  const searchClick = useCallback(() => {
    setIsSearch(true);
  }, [setIsSearch]);

  // 监听滚动
  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);
  if (!isSearch) prevY.current = scrollY;
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false);

  // 透明度设置
  const isAlpha = topAlpha && scrollY === 0;

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })} isSearch={isSearch}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchClick={searchClick}
            />
            <HeaderRight />
          </div>
          {/* 搜索额外区域 */}
          <SearchWrapper isSearch={isAlpha || isSearch} />
        </div>
        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default Header;
