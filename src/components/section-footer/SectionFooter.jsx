import React, { memo } from "react";
import { motion } from "framer-motion";

import { FooterWrapper } from "./style";
import drag from "@/assets/img/drag.png";
import IconMoreArrow from "@/assets/img/svg/icon-more-arrow";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {
  let message = "";
  const { address } = props;

  if (address) {
    message = `查看更多${address}房源`;
  } else {
    message = "显示全部";
  }

  const variants = {
    initial: {
      opacity: 1,
      x: 0,
    },
    animate: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
      },
    },
  };

  const navagate = useNavigate()
  const handleMoreClick = () => {
    navagate('/entire')
  };

  return (
    <FooterWrapper color={address ? "#00848A" : "#000"}>
      <div className="info">
        <div className="more" onClick={handleMoreClick}>
          <span className="text">{message}</span>
          <IconMoreArrow />
        </div>
        {!address && (
          <motion.img
            variants={variants}
            initial="initial"
            animate="animate"
            src={drag}
            alt=""
          />
        )}
      </div>
    </FooterWrapper>
  );
});

export default SectionFooter;
