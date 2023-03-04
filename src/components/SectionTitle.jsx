import React from 'react'

function SectionTitle({ title, name="" }) {
  return (
    <div name={name} className="my-6 mb-10 py-2 border-b-2 border-b-nord2 text-nord1 text-3xl font-bold">
          <h2>{ title }</h2>
    </div>
  )
}

export default SectionTitle