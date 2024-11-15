import React, { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header/SectionHeader';
import SectionTabs from '@/components/section-tabs/SectionTabs';
import SectionRooms from '@/components/section-rooms/SectionRooms';
import SectionFooter from "@/components/section-footer/SectionFooter";

const HomeSectionV2 = memo((props) => {
  const { roomData } = props;
  // 数据的转化
  const initialName = Object.keys(roomData.dest_list)[0]
  const [address, setAddress] = useState(initialName);
  const handleItemClick = useCallback((item, name) => {
    setAddress(name);
  }, []);
  const tabNames = roomData.dest_address?.map((item) => item.name);

  return (
    <SectionV2Wrapper>
      <div className="discount">
        <SectionHeader title={roomData.title} subtitle={roomData.subtitle} />
        <SectionTabs tabNames={tabNames} tabClick={handleItemClick} />
        <AnimatePresence mode="wait">
          <motion.div
            key={address}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <SectionRooms
              roomList={roomData.dest_list?.[address]}
              itemWidth="33.33%"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <SectionFooter address={address} />
    </SectionV2Wrapper>
  );
})

export default HomeSectionV2