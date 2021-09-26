import useToggle from "../../tools/useToggle";

export default function ToggleCmp() {
  const [value, toggleValue] = useToggle(false)

  return(
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>To True</button>
      <button onClick={() => toggleValue(false)}>To False</button>
    </div>
  )
}
