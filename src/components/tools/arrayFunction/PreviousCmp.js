import { useState } from "react";
import usePrevious from '../../tools/usePrevious'

export default function PreviousCmp() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("ZDL")
  const previousCount = usePrevious(count)

  return (
    <div>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>Increment</button>
      <button onClick={() => setName("Jhon")}>Change name</button>
    </div>

  )
}