import { useEffect, useState } from "react"

export default function useLiveTime(intervalMs: number = 60000): number {
  const [tick, setTick] = useState(Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(Date.now())
    }, intervalMs)

    return () => clearInterval(interval)
  }, [intervalMs])

  return tick
}
