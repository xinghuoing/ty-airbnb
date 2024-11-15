import React, { memo, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/img/svg/icon-arrow-left';
import IconArrowRight from '@/assets/img/svg/icon-arrow-right';


const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0);

  // 用于记录totalDistance，没必要用useState，会导致页面多次刷新
  const totalDistanceRef = useRef();
  const scrollContentRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth; // 本身的宽度
    const totalDistance = scrollWidth - clientWidth;
    // totalDistance 大于0，表示存在可以横向滚动的区域，需要显示右侧按钮
    setShowRight(totalDistance > 0);
    totalDistanceRef.current = totalDistance
  }, [props.children]);

  // 点击右移按钮逻辑
  // 拿到下一个元素
  const controlRightClick = (isRight) => {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newElOffsetLeft = newEl.offsetLeft;
    // 向左位移newElOffsetLeft距离，就是前一个元素宽度+margin的值
    scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`;
    setPosIndex(newIndex);
    // 判断右边按钮是否显示
    setShowRight(totalDistanceRef.current > newElOffsetLeft);
    // 判断左边按钮是否显示
    setShowLeft(newElOffsetLeft > 0);
  };

  return (
    <ViewWrapper>
      {showLeft && (
        <div className="control left" onClick={(e) => controlRightClick(false)}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <IconArrowLeft />
          </motion.div>
        </div>
      )}
      {showRight && (
        <div
          className="control right"
          onClick={(e) => controlRightClick(true)}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <IconArrowRight />
          </motion.div>
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
})

export default ScrollView