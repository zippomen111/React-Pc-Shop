import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../redux/slices/filter'

import styles from "./Pagination.module.scss"


export const PaginationBlock = () => {
    // ReactPaginate start from 0, to get correct page number - "event.selected + 1"
    const dispatch = useDispatch()
    return (
        <ReactPaginate className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
            pageRangeDisplayed={3}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
}