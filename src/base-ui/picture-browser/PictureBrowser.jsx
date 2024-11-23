import React, { memo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { BrowserWrapper } from "./style";
import IconClose from "@/assets/img/svg/icon-close";
import IconArrowLeftNobroad from "@/assets/img/svg/icon-arrow-left-nobroad";
import IconArrowRightNobroad from "@/assets/img/svg/icon-arrow-right-nobroad";
import IconTriangleArrowBottom from "@/assets/img/svg/icon-triangle-arrow-bottom";
import Indicator from "../indicator/Indicator";
import classNames from "classnames";
import IconTriangleArrowTop from "@/assets/img/svg/icon-triangle-arrow-top";

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showList, setShowList] = useState(true)

  // 当图片浏览器展示出来，让滚动功能消失
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeClickHandle = () => {
    if (closeClick) closeClick();
  };

  const controlClickHandle = (isRight) => {
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;

    setCurrentIndex(newIndex);
  };

  return (
    <BrowserWrapper showlist={showList ? 1 : 0}>
      <div className="top">
        <motion.div
          className="close-btn"
          onClick={closeClickHandle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconClose />
        </motion.div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => controlClickHandle(false)}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconArrowLeftNobroad width="77" height="77" />
            </motion.div>
          </div>
          <div className="btn right" onClick={(e) => controlClickHandle(true)}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconArrowRightNobroad width="77" height="77" />
            </motion.div>
          </div>
        </div>
        <div className="picture">
          <AnimatePresence initial={false}>
            <motion.div
              key={pictureUrls[currentIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}: room
              </span>
              <span>Apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={(e) => setShowList(!showList)}>
              {showList ? (
                <div>
                  <span>隐藏图片列表</span>
                  <IconTriangleArrowBottom />
                </div>
              ) : (
                <div>
                  <span>显示图片列表</span>
                  <IconTriangleArrowTop />
                </div>
              )}
            </div>
          </div>
          <div className="img-list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: currentIndex === index,
                    })}
                    key={item}
                    onClick={(e) => setCurrentIndex(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

export default PictureBrowser;
