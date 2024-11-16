import { useEffect, useState } from "react";
import { throttle } from 'underscore'

export function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // 节流
    const handleScroll = throttle(() => {
      // 监听window滚动
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollX, scrollY };

}