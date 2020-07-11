import React from 'react'
import { Project } from 'generated/graphql'
import { Box, Flex } from 'rebass'
import ProjectCard from 'components/projects/ProjectCard'

const ProjectsList = ({ projects }: { projects: Project[] }) => {
    return (
        <Flex flexWrap="wrap">
            {projects.map((project, index) => (
                <Box
                    key={index}
                    mr="auto"
                    width={[1, 1 / 3, 1 / 4]}
                    px={2}
                    py={3}
                >
                    <ProjectCard project={project} />
                </Box>
            ))}
        </Flex>
    )
}

export default ProjectsList
