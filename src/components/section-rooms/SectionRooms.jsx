import React, { memo } from "react";
import RoomItem from "../room-item/RoomItem";
import { RoomWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList, itemWidth } = props;
  return (
    <RoomWrapper>
      {roomList?.slice(0, 8).map((item) => {
        return <RoomItem key={item.id} itemData={item} itemWidth={itemWidth} />;
      })}
    </RoomWrapper>
  );
});

export default SectionRooms;
