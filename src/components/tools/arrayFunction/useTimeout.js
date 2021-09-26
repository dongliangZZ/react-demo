import { useCallback, useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  /**
   * we creat a ref that wraps our callback and
   * we're creating a ref that just is a blank ref
   * for our actual timeout itself
   * the reason we're creating this call back graph here
   * is because if our callback changes for ex
   * this cmp render multiple times this use timeout is going to
   * pass a new funciton every time which means it's technically going
   * to be different, use this ref that just allows the callback even when it changes
   * to stay same
   */
  const callbackRef = useRef(callback)
  const timeoutRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}
