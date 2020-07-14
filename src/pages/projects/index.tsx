import { useState, useEffect } from 'react'
import { Flex, Box } from 'rebass'
import { useLazyQuery } from '@apollo/react-hooks'
import GET_PROJECTS from 'lib/graphql/get-projects'
import InfiniteScroll from 'react-infinite-scroller'

import ProjectsList from 'components/projects/ProjectsList'
import ProjectFilter from 'components/projects/ProjectFilter'
import ItemsCount from 'components/pagination/ItemsCount'
import Pagination from 'components/pagination/Pagination'
import Hero from 'components/projects/Hero'
import Layout from 'components/layout/Layout'
import Text from 'components/common/Text'

const Projects = () => {
    const pageCount = 9
    const [pageIndex, setPageIndex] = useState(0)
    const [count, setCount] = useState(29)  //TODO: change to total page count from server.
    const [items, setItems] = useState<number[]>([])


    const [searchWord, setSearchWord] = useState()

    const [getProjectsQuery, result] = useLazyQuery(GET_PROJECTS)

    const { loading, called, data = {} } = result

    const projects = data.getProjects || []

    useEffect(() => {
        if (!loading && projects.length > 0) {
            setItems(items => [...items, ...projects])
        }
    }, [loading, pageIndex, projects])

    if (called && loading) {
        return (
            <Layout>
                <Text> Loading </Text>
            </Layout>
        )
    }

    const handlePageClick = (data, pageSize) => {
        let selected = data.selected
        let offset = Math.ceil(selected * pageSize)

        // getProjectsQuery({
        //     variables: {
        //         ...(searchWord ? { name: searchWord }: undefined)
        //         skip: offset,
        //         limit: pageSize
        //     }
        // })
    }

    const handleScrollEnd = page => {
        console.log('handleScrollEndOutside')
        if (page !== 1) {
            console.log('handleScrollEnd')
            let offset = Math.ceil(pageIndex * 10) // 10 results each time user scrolls to end

            // TODO : Add { variables: { sector, skills, location, status, skip, limit } }
            getProjectsQuery()
            setPageIndex(page)
        }
    }

    if (!called && !loading) {
        // TODO : Add { variables: { sector, skills, location, status, skip, limit } }
        getProjectsQuery()
        //getProjectsQuery({ skip: 10, limit: 25 })
    }

    const handlePageClick = (data, pageSize) => {
        let selected = data.selected
        let offset = Math.ceil(selected * pageSize)

        getProjectsQuery({
            variables: {
                ...(searchWord ? { name: searchWord }: undefined),
                skip: offset,
                limit: pageSize
            }
        })
        setPageIndex(selected)
    }

    const handleScrollEnd = page => {
        console.log('handleScrollEndOutside')
        if (page !== 1) {
            console.log('handleScrollEnd')
            let offset = Math.ceil(pageIndex * pageCount) // 10 results each time user scrolls to end

            // TODO : Add { variables: { sector, skills, location, status, skip, limit } }
            // getProjectsQuery({ 
            //     variables: { 
            //         skip: page,
            //         limit: offset
            //     } 
            // })
            getProjectsQuery()
            setPageIndex(page)
        }
    }

    return (
        <Layout title="Ownemployed | Explore">
            <Flex flexDirection="column">
            <>
                <Hero />
                <Box>
                    <ProjectFilter
                        onSubmitSearch={(values, actions) => {
                            setTimeout(() => {
                                const { search } = values

                                getProjectsQuery({
                                    variables: {
                                        ...(search ? { name: search }: undefined),
                                    }
                                })

                                setSearchWord(search)
                                
                                actions.setSubmitting(false)
                            }, 1000)
                        }}
                    />
                    <Box
                        sx={{
                            mx: 'auto',
                            py: 2,
                        }}
                    >
                        <ItemsCount totalCount={count} size={9} />
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
                        <ProjectsList projects={projects} />
                    </InfiniteScroll>
                </Box>
                <Box display={['none', 'block', 'block']}>
                    <ProjectsList projects={projects} />
                    <Pagination handler={handlePageClick} pageIndex={pageIndex} perPage={pageCount} totalCount={count}/>
                </Box>
            </>
            </Flex>
        </Layout>
    )
}

export default Projects