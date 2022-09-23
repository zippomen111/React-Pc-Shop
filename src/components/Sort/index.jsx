import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSortId } from '../../redux/slices/filter'
import { setSortIndex } from '../../redux/slices/filter'

import style from "./Sort.module.scss"

export const Sort = () => {
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
        <div className={style.root}>
            <b>Sort by: </b>
            <span onClick={() => setIsOpen(!isOpen)}>{sortId.name}</span>
            <ul>
                {
                    isOpen && (
                        //order items render
                        <div className={style.popup}>
                            {
                                sortList.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => onClickListItem(item, index)}
                                        className={sortId.id === index ? `${style.active}` : ""}>
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
