import { useArray } from "utils"
import React from "react";
export const TsReactTest = () => {
  const persons: { name: string, age: number }[] = [
    { name: 'nishigi', age: 25 },
    { name: 'mxxy', age: 22 },
  ]
  const { value, clear, add, removeIndex } = useArray(persons)

  return <div>
    <button onClick={() => add({ name: 'man', age: 12 + (Math.ceil(Math.random() * 10)) })}>add</button>
    <button onClick={() => removeIndex(0)}>removeIndex</button>
    <button onClick={() => clear()}>clear</button>
    <ol>
      {value.map((li, idx) => <li key={idx}>{idx}---{li.name}-{li.age}</li>)}
    </ol>
  </div>
}