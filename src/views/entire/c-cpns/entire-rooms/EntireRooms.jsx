import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item/RoomItem'
import { useNavigate } from 'react-router-dom';
import { changeDetailInfoAction } from '@/store/modules/detail';

const EntireRooms = memo((props) => {
    const { roomList, totalCount, isLoading } = useSelector(
      (state) => ({
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount,
        isLoading: state.entire.isLoading
      }),
      shallowEqual
  ); 

  // 跳转详情页并将数据存起来
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClick = useCallback(
    (item) => {
      dispatch(changeDetailInfoAction(item));
      navigate("/detail");
    },
    [navigate, dispatch]
  );

  return (
    <RoomsWrapper>
      <div className="total">{totalCount}多处住所</div>
      <div className="list">
        {roomList.map((item) => {
          return <RoomItem key={item._id} itemData={item} itemWidth="20%" itemClick={itemClick} />;
        })}
      </div>
      {/* 添加蒙板 */}
      {isLoading && <div className="bg-cover"></div>}
    </RoomsWrapper>
  );
})

export default EntireRooms