import React, { useState } from 'react'

import "./index.scss"

function ProductList({ title, imageUrl, description, price }) {
    const [isActive, setIsActive] = useState(0)
    const colors = ["white", "blue", "black"]

    return (


        <div className="products__card-item">
            <div className="products__image">
                <img src={imageUrl} alt="g502" />
            </div>
            <div className="products__card-text">
                <h2>{title}</h2>
                {
                    colors.map((item, index) => (
                        <span
                            key={index}
                            onClick={() => setIsActive(index)}
                            className={isActive === index ? 'products__selector active' : 'products__selector'}>
                            {item}
                        </span>
                    ))
                }
                <p>{description}</p>
                <b>price: {price}$</b>
                <button className="products__button">BUY</button>
            </div>
        </div>
    )
}

export default ProductList;