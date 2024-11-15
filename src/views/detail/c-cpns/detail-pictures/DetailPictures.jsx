import React, { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { PicturesWrapper } from "./style";
import PictureBrowser from "@/base-ui/picture-browser/PictureBrowser";

const DetailPictures = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false);

  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={(e) => setShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo.picture_urls.slice(1, 5).map((item) => {
            return (
              <div
                className="item"
                key={item}
                onClick={(e) => setShowBrowser(true)}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      <motion.div
        className="show-btn"
        onClick={(e) => setShowBrowser(true)}
        whileHover={{
          scale: 1.05,
          background: "linear-gradient(45deg, #d70466, #ff385c)",
          color: "#fff",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5 }}
      >
        显示图片
      </motion.div>

      {showBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo.picture_urls}
          closeClick={(e) => setShowBrowser(false)}
        />
      )}
    </PicturesWrapper>
  );
});

export default DetailPictures;
