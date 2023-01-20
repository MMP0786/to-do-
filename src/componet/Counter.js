import React from 'react'

export default function Counter() {
    const [value, setValue] = React.useState(0)
    function increase() {
        setValue(value + 1);
    }
  return (
    <div>
        <h1>{value}</h1>
            <button onClick={increase}>Increase count</button>
    </div>
  )
}
