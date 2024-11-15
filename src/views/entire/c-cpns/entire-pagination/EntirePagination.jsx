import React, { memo } from 'react'
import Pagination from "@mui/material/Pagination";

import { PaginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchEntireDataAction } from '@/store/modules/entire';


const EntirePagination = memo(() => {
  const { totalCount, currentPage, roomList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList
    }),
    shallowEqual
  );

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20;

  // 事件处理
  const dispatch = useDispatch()
  const pageChangeHandle = (event, pageCount) => {
    // 回到顶部
    window.scrollTo(0, 0)

    // 更新currentPage,并重新请求数据
    dispatch(fetchEntireDataAction(pageCount - 1));
  }

  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            这里有{startCount} - {endCount}个房源,共超过{totalCount}个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
})

export default EntirePagination