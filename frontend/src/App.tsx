import React, { ReactElement, useEffect } from 'react'

function App(): ReactElement {
  useEffect(() => {
    async function load() {
      const r = await fetch('http://localhost:8080/api')
      const j = await r.json()
      console.log(j)
    }
    load()
  }, [])

  return (
    <div>
      <div>App</div>
    </div>
  )
}

export default App
