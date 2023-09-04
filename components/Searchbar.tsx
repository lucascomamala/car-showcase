"use client"

import { useState } from "react"

import { SearchManufacturer } from "."

const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState('')

  const handleSearch = (e: any) => {
    e.preventDefault()
    console.log('searching...')
  }

  return (
    <form
      className='searchbar'
      onSubmit={handleSearch}
    >
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default Searchbar
