import { useState } from "react";
import useFetch from "../../tools/useFetch";

export default function FetchCmp() {
  const [id, setId] = useState(1)
  const { loading, error, value } = useFetch(
    `URL/${id}`,
    {},
    [id]
  )

  return (
    <div>
      <div>{id}</div>
      <button onClick={() => setId(currentId => currentId + 1)}>Increment Id</button>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
    </div>
  )
}