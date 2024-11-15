import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  return (
    <HeaderWrapper>
      <h2 className="title">{props.title}</h2>
      {props.subtitle && <div className="sub-title">{props.subtitle}</div>}
    </HeaderWrapper>
  );
})

export default SectionHeader