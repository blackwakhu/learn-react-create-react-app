import React from 'react'
import ReactDom from 'react-dom'

let i = 1
const name = 'genius'

const elem = (
  <div>
    <h1>hello {name}</h1>
    <h1>{i}</h1>
  </div>
)

ReactDom.render(
  element, document.getElementById("root");
)
