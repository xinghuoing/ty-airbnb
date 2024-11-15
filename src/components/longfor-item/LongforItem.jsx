import React, { memo } from 'react'
import { motion } from 'framer-motion'

import { ItemWrapper } from './style'

const LongforItem = memo((props) => {
  const { itemData } = props
  return (
    <ItemWrapper>
      <motion.div className="inner" whileHover={{ scale: 1.05 }} whileTap={{scale: 0.95}}>
        <img className="cover" src={itemData.picture_url} alt="" />
        <div className="cover-bg"></div>
        <div className="info">
          <div className="city">{itemData.city}</div>
          <div className="price">均价{itemData.price}</div>
        </div>
      </motion.div>
    </ItemWrapper>
  );
})

export default LongforItem