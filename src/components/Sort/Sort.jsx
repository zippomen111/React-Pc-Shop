import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSortId } from '../../redux/slices/filter'
import { setSortIndex } from '../../redux/slices/filter'

import "./index.scss"

function Sort() {
    const sortList = ["rating", "price", "title"]
    const [isOpen, setIsOpen] = useState(false)
    const sortId = useSelector((state) => state.filterSlice.sort)
    const dispatch = useDispatch()

    const onClickListItem = (item, index) => {
        dispatch(setSortId(item))
        dispatch(setSortIndex(index))
        setIsOpen(false)
    }

    return (
        <div className="sort">
            <b>Sort by: </b>
            <span onClick={() => setIsOpen(!isOpen)}>{sortId.name}</span>
            <ul>
                {
                    isOpen && (
                        //order items render
                        <div className="sort__popup">
                            {
                                sortList.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => onClickListItem(item, index)}
                                        className={sortId.id === index ? "active" : ""}>
                                        {item}
                                    </li>
                                ))
                            }
                        </div>
                    )
                }
            </ul>
        </div>
    )

}

export default Sort