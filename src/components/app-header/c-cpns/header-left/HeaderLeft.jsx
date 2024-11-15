import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/img/svg/icon-logo'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  const logoClickHandle = () => {
    navigate('/home')
  }
  return (
    <LeftWrapper>
      <div className='logo' onClick={logoClickHandle}>
        <IconLogo />
      </div>
    </LeftWrapper>
  );
})

export default HeaderLeft