import React, { memo, useCallback, useState } from 'react'
import HeaderLeft from './c-cpns/header-left/HeaderLeft'
import HeaderCenter from './c-cpns/header-center/HeaderCenter'
import HeaderRight from './c-cpns/header-right/HeaderRight'

import { HeaderWrapper, SearchWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'


const Header = memo(() => {
  const [isSearch, setIsSearch] = useState(false)

  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed } = headerConfig;

  // 处理搜索打开逻辑
  const searchClick = useCallback(() => {
    setIsSearch(true);
  }, [setIsSearch]);

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter isSearch={isSearch} searchClick={searchClick} />
          <HeaderRight />
        </div>
        {/* 搜索额外区域 */}
        <SearchWrapper issearch={isSearch} />
      </div>
      {isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
    </HeaderWrapper>
  );
})

export default Header