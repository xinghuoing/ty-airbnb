import React, { memo, useEffect } from 'react'

import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures/DetailPictures'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'
// import DetailInfos from './c-cpns/detail-infos/DetailInfos'

const Detail = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false }));
  })

  return (
    <DetailWrapper>
      <DetailPictures />
      {/* <DetailInfos/> */}
    </DetailWrapper>
  )
})

export default Detail