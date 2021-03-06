import React from 'react'

export default function Characters(props) {
  return (
    <div>
      <h1>Characters</h1>
      {props.characters.map((character) => {
        return <h2>{character.name}</h2>
      })}
    </div>
  )
}
