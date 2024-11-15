import React, { memo } from "react";

import SectionHeader from "@/components/section-header/SectionHeader";
import SectionRooms from "@/components/section-rooms/SectionRooms";
import { SectionV1Wrapper } from "./style";
import SectionFooter from "@/components/section-footer/SectionFooter";

const HomeSectionV1 = memo((props) => {
  const { roomData, itemWidth } = props;
  return (
    <SectionV1Wrapper>
      <SectionHeader title={roomData.title} subtitle={roomData.subtitle} />
      <SectionRooms roomList={roomData.list} itemWidth={itemWidth} />
      <SectionFooter/>
    </SectionV1Wrapper>
  );
});

export default HomeSectionV1;
