import React, { memo } from 'react'
import { SectionsWrapper } from './style'

const SearchSeactions = memo((props) => {
  const { searchInfos } = props
  return (
    <SectionsWrapper>
      <div className="sections">
        <div className="content">
          {searchInfos.map(item => {
            return (
              <div className='item' key={item.title}>
                <div className="title">{item.title}</div>
                <div className="desc">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionsWrapper>
  )
})

export default SearchSeactions