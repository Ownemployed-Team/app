import React from 'react'
import ReactPaginate from 'react-paginate'
import { Box, Flex } from 'rebass'
import { css } from 'emotion'

import ItemsCount from 'components/pagination/ItemsCount'

const pagination = css`
    display: inline-block;
`

const paginationContainer = css`
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
`

const pageChangeButton = css`
    display: inline-block;
    margin: 10px;
    padding: 0;
    & a {
        outline: none;
        border-radius: 4px;
        padding: 10px;
        cursor: pointer;
        &:active {
            background-color: #ccc;
        }
    }
`

const page = css`
    display: inline-block;
    width: 36px;
    height: 36px;
    padding: 8px;
    text-align: center;
`

const paginationSubContainer = css`
    display: inline-block;
`

const activePage = css`
    display: inline-block;
    border-radius: 50%;
    background-color: #768598;
    color: white;
`
const Pagination = ({ handler, pageIndex, perPage = 9, totalCount }) => {
    const pageSize = perPage
    const pageCount = Math.ceil(totalCount / pageSize)
    const handleWrapper = pageSize => data => handler(data, pageSize)
    return (
        <>
            <hr />
            <Flex justifyContent="space-between" width="100%">
                <Box>
                    <ItemsCount totalCount={totalCount} size={10} />
                </Box>
                <Box>
                    <ReactPaginate
                        //breakClassName={pageBreak}
                        //onPageChange={data => handlePageClick(data, pageSize)}
                        activeClassName={activePage}
                        breakLabel="..."
                        className={pagination}
                        containerClassName={paginationContainer}
                        forcePage={pageIndex}
                        marginPagesDisplayed={2}
                        nextClassName={pageChangeButton}
                        nextLabel=">"
                        onPageChange={handleWrapper(pageSize)}
                        pageClassName={page}
                        pageCount={pageCount}
                        pageRangeDisplayed={5}
                        previousClassName={pageChangeButton}
                        previousLabel="<"
                        subContainerClassName={paginationSubContainer}
                    />
                </Box>
            </Flex>
        </>
    )
}

export default Pagination
