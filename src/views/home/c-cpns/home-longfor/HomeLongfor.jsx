import React, { memo } from 'react'
import { LongforWrapper } from './style'
import SectionHeader from '@/components/section-header/SectionHeader'
import LongforItem from '@/components/longfor-item/LongforItem'
import ScrollView from '@/base-ui/scroll-view/ScrollView'

const HomeLongfor = memo((props) => {
  const { roomData } = props
  return (
    <LongforWrapper>
      <SectionHeader title={roomData.title} subtitle={roomData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {roomData.list?.map((item) => {
            return <LongforItem itemData={item} key={item.city} />;
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
})

export default HomeLongfor