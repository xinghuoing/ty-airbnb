import React, { memo, useState } from 'react'
import { motion } from 'framer-motion'

import { TabsWrapper, TabButton } from './style'

import ScrollView from '@/base-ui/scroll-view/ScrollView'

const SectionTabs = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { tabNames = [], tabClick } = props;
  const handleItemClick = (index, name) => {
    setCurrentIndex(index)
    tabClick(index, name);
  };


  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => (
          <TabButton
            isActive={currentIndex === index ? 1 : 0}
            key={item}
            onClick={(e) => handleItemClick(index, item)}
          >
            <span style={{ position: "relative", zIndex: 2 }}>{item}</span>
            {/* 给背景加动画 */}
            {currentIndex === index && (
              <motion.div
                className="bgc"
                layoutId="activeBgc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 1000,
                  damping: 50
                }}
              />
            )}
          </TabButton>
        ))}
      </ScrollView>
    </TabsWrapper>
  );
})

export default SectionTabs