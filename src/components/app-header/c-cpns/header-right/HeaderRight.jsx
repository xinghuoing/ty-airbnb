import React, { memo, useEffect, useState } from "react";
import { motion } from 'framer-motion'

import { RightWrapper } from "./style";
import IconGlobal from "@/assets/img/svg/icon_global";
import IconMenu from "@/assets/img/svg/icon_menu";
import IconAvatar from "@/assets/img/svg/icon_avatar";

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  // 副作用代码
  useEffect(() => {
    function handleWindowClick() {
      setShowPanel(false);
    }
    // 显示panel设置showPanel为true为冒泡事件（从下往上），会来到window再设置为false，会打不开
    // true设置为事件捕获阶段（从上往下），先设置为false，在设置为true
    window.addEventListener("click", handleWindowClick, true);
    return () => {
      window.removeEventListener("click", handleWindowClick, true);
    }
  }, []);
  function profileClickHandle() {
    setShowPanel(true);
  }

  // 动画
 const variants = {
   closed: {
     opacity: 0, // 不透明度为 0
   },
   open: {
     opacity: 1, // 不透明度为 1
     transition: { staggerChildren: 0.1 }, // 子元素依次动画，每次间隔 0.1 秒
   },
  };
  
  const profileInfo = ["注册", "登录", "出租房源", "开展体验", "帮助"];

  return (
    <RightWrapper>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={() => profileClickHandle()}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <motion.div
            className="panel"
            variants={variants}
            initial="closed"
            animate="open"
          >
            <div className="list">
              {profileInfo.map((item) => (
                <motion.div className="item" variants={variants}>
                  <motion.div whileHover={{scale: 1.1, x: 12}}>{item}</motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
