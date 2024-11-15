import React, { memo } from "react";
import { motion } from "framer-motion";
import Rating from "@mui/material/Rating";
import { ItemWrapper } from "./style";
import RoomSwiper from "../room-swiper/RoomSwiper";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;

  const itemClickHandle = (itemData) => {
    // 父组件传入函数给子组件，我只想swiper点击进入详细页，所以swiper传入itemClick函数就可以
    if (itemClick) itemClick(itemData);
  };

  return (
    <ItemWrapper
      itemwidth={itemWidth}
      onClick={(e) => itemClickHandle(itemData)}
    >
      <div className="inner">
        {!itemData.picture_urls ? (
          <motion.div className="cover" whileHover={{ scale: 1.05 }}>
            <img src={itemData.picture_url} alt="" />
          </motion.div>
        ) : (
          <RoomSwiper itemData={itemData} />
        )}
        <div
          className="desc"
          style={{ color: itemData.verify_info.text_color }}
        >
          {itemData.verify_info.messages.join("·")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">{"¥" + itemData.price + "/晚"}</div>
        <div className="bottom">
          <Rating
            name="read-only"
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData?.bottom_info && (
            <span className="extra">·{itemData.bottom_info.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

export default RoomItem;
