"use client"

import { createContext, useContext, useEffect, useRef, useState } from "react"
import Lenis from "lenis"
import { usePathname } from "next/navigation"

type LenisContextType = {
  lenis: Lenis | null
}

const LenisContext = createContext<LenisContextType>({ lenis: null })

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    setLenis(lenisInstance)

    // Scroll to top on route change
    lenisInstance.scrollTo(0, { immediate: true })

    return () => {
      lenisInstance.destroy()
      setLenis(null)
    }
  }, [pathname])

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  )
}

export function useLenis() {
  return useContext(LenisContext)
}

