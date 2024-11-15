import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header/SectionHeader'
import RoomItem from '@/components/room-item/RoomItem'
import ScrollView from '@/base-ui/scroll-view/ScrollView'
import SectionFooter from '@/components/section-footer/SectionFooter'

const HomeSectionV3 = memo((props) => {
  const { roomData } =props
  return (
    <SectionV3Wrapper>
      <SectionHeader title={roomData.title} subtitle={roomData.subtitle} />
      <div className="room-list">
        <ScrollView>
          {roomData.list?.map((item) => {
            return <RoomItem itemData={item} itemWidth="20%" key={item.id} />;
          })}
        </ScrollView>
      </div>
      <SectionFooter address="plus" />
    </SectionV3Wrapper>
  );
})

export default HomeSectionV3