import { useState, useEffect } from 'react'
import { Flex, Box } from 'rebass'
import { useLazyQuery } from '@apollo/react-hooks'
import GET_PROJECTS from 'lib/graphql/get-projects'

import ProjectsList from 'components/projects/ProjectsList'
import Hero from 'components/projects/Hero'
import Layout from 'components/layout/Layout'
import Text from 'components/common/Text'

const Projects = () => {
    const [pageIndex, setPageIndex] = useState(1)
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

    if (!called && !loading) {
        // TODO : Add { variables: { sector, skills, location, status, skip, limit } }
        getProjectsQuery()
        //getProjectsQuery({ skip: 10, limit: 25 })
    }

    return (
        <Layout title="Ownemployed | Explore">
            <Flex flexDirection="column">
                <Box mt={4} borderWidth="1px">
                    <Hero />
                </Box>
                <Box mt={4}>
                    <ProjectsList projects={projects} />
                </Box>
            </Flex>
        </Layout>
    )
}

export default Projects

/*
const AllProjects = () => {
    const [pageIndex, setPageIndex] = useState(1)
    const [items, setItems] = useState<number[]>([])
    const [searchWord, setSearchWord] = useState()
    const [getProjectsQuery, result] = useLazyQuery(GET_PROJECTS)
    const { loading, called, data = {} } = result
    const projects = data.getProjects || []

    useEffect(() => {
        console.log('useEffect')
        if (!loading && projects.length > 0) {
            console.log('useEffect pageIndex: ', pageIndex)
            setItems(items => [...items, ...projects])
        }
    }, [loading, pageIndex, projects])

    if (called && loading) {
        return (
            <>
                <Text> Loading </Text>
            </>
        )
    }

    if (!called && !loading) {
        console.log('getProjects')
        // TODO : Add { variables: { sector, skills, location, status, skip, limit } }
        getProjectsQuery({
            variables: {
                skip: 0,
                take: 25,
            },
        }) //Initial fetch
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

    return (
        <>
            <Hero />
            <Box>
                <ProjectFilter
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
                        py: 2,
                    }}
                >
                    <ItemsCount items={items} size={10} />
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
                    <ProjectsList projects={items} />
                </InfiniteScroll>
            </Box>
            <Box display={['none', 'block', 'block']}>
                <ProjectsList projects={items} />
                <Pagination items={projects} handler={handlePageClick} />
            </Box>
        </>
    )
}

export default AllProjects
*/
