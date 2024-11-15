import React, { memo, useRef, useState } from "react";
import classNames from "classnames";
import { Carousel } from "antd";
import { motion } from "framer-motion";

import { RswiperWrapper } from "./style";
import IconArrowLeftNobroad from "@/assets/img/svg/icon-arrow-left-nobroad";
import IconArrowRightNobroad from "@/assets/img/svg/icon-arrow-right-nobroad";
import Indicator from "@/base-ui/indicator/Indicator";
// import LazyImage from "@/base-ui/lazy-image/LazyImage";

const RoomSwiper = memo((props) => {
  const { itemData } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const swiperRef = useRef();
  const controlClickHandle = (isRight, event) => {
    isRight ? swiperRef.current.next() : swiperRef.current.prev();

    // 拿到最新的索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    const length = itemData.picture_urls.length;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;
    setSelectIndex(newIndex);

    // 阻止冒泡事件
    event.stopPropagation()
  };

  // 点击小点
  const dotClickHandle = (index, event) => {
    swiperRef.current.goTo(index);
    setSelectIndex(index);
    event.stopPropagation();
  };

  // 图片懒加载
  

  return (
    <RswiperWrapper>
      <div className="swiper">
        <div className="overlay"></div>
        <div className="control">
          <div className="btn" onClick={(e) => controlClickHandle(false, e)}>
            <motion.div
              className="left"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconArrowLeftNobroad width="30" height="30" />
            </motion.div>
          </div>
          <div className="btn" onClick={(e) => controlClickHandle(true, e)}>
            <motion.div
              className="right"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconArrowRightNobroad width="30" height="30" />
            </motion.div>
          </div>
        </div>
        <div className="indicator">
          <Indicator selectIndex={selectIndex}>
            {itemData?.picture_urls?.map((item, index) => {
              return (
                <div className="item" key={item}>
                  {selectIndex !== index && (
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className={classNames(
                        "dot",
                        { active: selectIndex === index },
                        {
                          subactive:
                            index === selectIndex - 1 ||
                            index === selectIndex + 1 ||
                            index === selectIndex - 2 ||
                            index === selectIndex + 2,
                        }
                      )}
                      onClick={(e) => dotClickHandle(index, e)}
                    ></motion.div>
                  )}
                  {selectIndex === index && (
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, backgroundColor: "#ff385c" }}
                      transition={{
                        duration: 1,
                      }}
                      className={classNames(
                        "dot",
                        { active: selectIndex === index },
                        {
                          subactive:
                            index === selectIndex - 1 ||
                            index === selectIndex + 1 ||
                            index === selectIndex - 2 ||
                            index === selectIndex + 2,
                        }
                      )}
                      onClick={(e) => dotClickHandle(index, e)}
                    ></motion.div>
                  )}
                </div>
              );
            })}
          </Indicator>
        </div>
        <Carousel dots={false} ref={swiperRef}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="cover" key={item}>
                <img src={item} alt="" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </RswiperWrapper>
  );
});

export default RoomSwiper;
