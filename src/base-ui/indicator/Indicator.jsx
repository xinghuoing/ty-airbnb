import React, { memo, useEffect, useRef } from 'react'
import { IndecatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    const selectItemEl = contentRef.current.children[selectIndex]
    // item的左边到content距离和item的宽度
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth
    // content宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScorll = contentRef.current.scrollWidth
    // 移动距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

    // 左边特殊情况
    if (distance < 0) distance = 0
    // 右边特殊情况
    if (distance > contentScorll - contentWidth) distance = contentScorll - contentWidth;
    // 改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndecatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndecatorWrapper>
  );
});

export default Indicator