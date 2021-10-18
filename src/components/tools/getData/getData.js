import { useEffect, useState } from 'react'
import axios from 'axios'

export default function GetData() {
  const URL = "https://jsonplaceholder.typicode.com/posts"
  
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    getData()
    // getData().then(data => setState({data}))
    //                       .catch(err => { /*...handle the error...*/});
  }, [])

  async function getData() {

    //const res = await axios(URL)
    //1. return await res.json()
    //2. return setData(res.data)
    await axios(URL)
    .then(res => {
      setData(res.data)
    })
    .catch(error => {
      console.error("error: ", error)
      setError(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  if (loading) return "loading..."
  if (error) return "error"

  return (
    <div>
      {data}
    </div>
  )
}