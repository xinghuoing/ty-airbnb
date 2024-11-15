import React, { memo, useEffect } from 'react'
import { useDispatch } from "react-redux";

import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter/EntireFilter';
import EntireRooms from './c-cpns/entire-rooms/EntireRooms';
import EntirePagination from './c-cpns/entire-pagination/EntirePagination';
import { fetchEntireDataAction } from '@/store/modules/entire';
import { changeHeaderConfigAction } from '@/store/modules/main';

const Entire = memo(() => {

  // 在主页请求数据，子组件里在去拿到数据
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true }));
  }, [dispatch]);

  return (
    <EntireWrapper>
        <EntireFilter />
        <EntireRooms />
        <EntirePagination />
    </EntireWrapper>
  );
})

export default Entire