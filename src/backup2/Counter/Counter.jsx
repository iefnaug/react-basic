import React from "react";
import styles from './Counter.module.css'

function Counter() {
  let [obj, setObj] = React.useState({count: 1, name: 'gf'})
  const handleClick = () => {
    setObj({
      ...obj,
      count: obj.count + 1
    })
  }

  return (
    <button className={styles.btn} onClick={handleClick}>点击: {obj.count} -- {obj.name}</button>
  )
}

export default Counter;