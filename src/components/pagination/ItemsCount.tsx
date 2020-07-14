import React from 'react'
import Text from 'components/common/Text'

const ItemsCount = ({ totalCount, size }) => {
    return (
        <Text>
            Showing {size} of {totalCount} results
        </Text>
    )
}

export default ItemsCount
