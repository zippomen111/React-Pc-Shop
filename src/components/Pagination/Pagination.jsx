import React from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux'

import "./index.scss"


export const PaginationBlock = ({ onChangePage }) => {
    // ReactPaginate start from 0, to get correct page number - "event.selected + 1"
    return (
        <ReactPaginate className='paginate'
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={3}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
}