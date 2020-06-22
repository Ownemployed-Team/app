import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from 'components/layout/Layout'

import { Box } from 'rebass'
import { useLazyQuery } from '@apollo/react-hooks'
import { GET_MEMBERS } from 'graphql/get-members'
import InfiniteScroll from 'react-infinite-scroller'

import Hero from 'components/members/Hero'
import ItemsCount from 'components/pagination/ItemsCount'
import MemberFilter from 'components/members/MemberFilter'
import MembersList from 'components/members/MembersList'
import Pagination from 'components/pagination/Pagination'
import Text from 'components/common/Text'

const Members = () => {
    const [pageIndex, setPageIndex] = useState(1)
    const [items, setItems] = useState<number[]>([])
    const [searchWord, setSearchWord] = useState()
    const [getUsersQuery, result] = useLazyQuery(GET_MEMBERS)

    const { loading, called, data = {} } = result

    const users = data.getMembers || []

    useEffect(() => {
        if (!loading && users.length > 0) {
            setItems(items => [...items, ...users])
        }
    }, [loading, pageIndex, users])

    if (called && loading) {
        return (
            <Layout>
                <Text> Loading </Text>
            </Layout>
        )
    }

    if (!called && !loading) {
        // TODO : Add { variables: { sector, skills, location, status, skip, limit } }
        getUsersQuery()
        //getUsersQuery({
        //    variables: {
        //        skip: 0,
        //        take: 25,
        //    },
        //}) //Initial fetch
    }

    const handlePageClick = (data, pageSize) => {
        let selected = data.selected
        let offset = Math.ceil(selected * pageSize)

        console.log(data)

        // getUsersQuery({
        //     variables: {
        //         ...(searchWord ? { name: searchWord }: undefined)
        //         skip: offset,
        //         limit: pageSize
        //     }
        // })
    }

    const handleScrollEnd = page => {
        if (page !== 1) {
            let offset = Math.ceil(pageIndex * 10) // 10 results each time user scrolls to end

            // TODO : Add { variables: { sector, skills, location, status, skip, limit } }
            getUsersQuery()
            setPageIndex(page)
        }
    }

    if (loading) {
        return <Layout>Loading</Layout>
    }

    const { getMembers: members } = data

    return (
        <Layout title="Ownemployed | About">
            <Hero />
            <Box>
                <MemberFilter
                    onSubmitSearch={(values, actions) => {
                        setTimeout(() => {
                            //TODO : call backend to find project with query function getProjects
                            const { search } = values

                            setSearchWord(search)

                            alert(JSON.stringify(values, null, 2))

                            actions.setSubmitting(false)
                        }, 1000)
                    }}
                />
                <Box
                    sx={{
                        mx: 'auto',
                        px: 2,
                        py: 2,
                    }}
                >
                    <ItemsCount items={users} size={10} />
                </Box>
            </Box>
            <Box display={['block', 'none', 'none']}>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={handleScrollEnd}
                    hasMore={true}
                    loader={
                        <div className="loader" key={0}>
                            Loading ...
                        </div>
                    }
                >
                    <MembersList members={users} />
                </InfiniteScroll>
            </Box>
            <Box display={['none', 'block', 'block']}>
                <MembersList members={users} />
                <Pagination items={users} handler={handlePageClick} />
            </Box>
        </Layout>
    )
}

export default Members

//export async function getStaticProps() {}
