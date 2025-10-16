import { useEffect, useState } from 'react'

interface ScreenSize {
  x: number
  y: number
}

function getRootFontSize(): number {
  const rootElement = document.documentElement

  if (rootElement) {
    const rootStyle = window.getComputedStyle(rootElement)
    return parseFloat(rootStyle.fontSize)
  }

  return 16
}

function getScreenPx(): ScreenSize {
  return {
    x: window.innerWidth,
    y: window.innerHeight,
  }
}

function getScreenSizeEm(): ScreenSize {
  const rootFontSize = getRootFontSize()
  const { x, y } = getScreenPx()

  return {
    x: x / rootFontSize,
    y: y / rootFontSize,
  }
}

export function useScreenSizeEm(): ScreenSize {
  const [size, setSize] = useState<ScreenSize>({ x: 0, y: 0 })

  useEffect(() => {
    function handleResize() {
      setSize(getScreenSizeEm())
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return size
}
