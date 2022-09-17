import React, { useState } from 'react'

import styles from "./ProductBlock.module.scss"

export const ProductBlock = ({ title, imageUrl, description, price }) => {
    const [isActive, setIsActive] = useState(0)
    const colors = ["white", "blue", "black"]

    return (
        <div className={styles.root}>
            <div className={styles.image}>
                <img src={imageUrl} alt="g502" />
            </div>
            <div className={styles.text}>
                <h2>{title}</h2>
                {
                    colors.map((item, index) => (
                        <span
                            key={index}
                            onClick={() => setIsActive(index)}
                            className={isActive === index ? `${styles.selector + " " + styles.active}` : `${styles.selector}`}>
                            {item}
                        </span>
                    ))
                }
                <p>{description}</p>
                <b>price: {price}$</b>
                <button className={styles.button}>BUY</button>
            </div>
        </div >
    )
}