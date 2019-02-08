import React from 'react'
import {Consumer} from '../ContextProvider'

export default function Anak() {
  return (
    <Consumer>
      {(context) => (
        <>
          <h1 style={{color: 'mistyrose', backgroundColor: context.state.theme}}>ZenFox</h1>
          <button onClick={context.toWhite}>White</button>
          <button onClick={context.toBlack}>Black</button>
        </>
      )

      }
    </Consumer>
  )
}
