import React from 'react'
import styles from '../Card/Card.module.scss'

const Card = (props) => {
  const movieList = props.movie

  return (
    <div>
      <main className={styles.card}>
        <ul>
          {movieList.map((movieInfo) => {
            return <li>{movieInfo.Title}</li>
          })}
        </ul>
      </main>
    </div>
  )
}

export default Card;
