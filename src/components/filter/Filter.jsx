import React from 'react'
import style from "./filter.module.css"


export default function Filter({sortBy, setSortBy}) {
  return (
    <div className={style.filter}>
    <div className={style.container}>
      <p>Filter By:</p>
      <select name="sort" id="sort" className={style.customselect} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort By</option>
        <option value="cheap">Cheap</option>
        <option value="expensive">Expensive</option>
      </select>
      
      
    </div>
    </div>
  )
}
