import Link from 'next/link'
import { Flex } from 'rebass'
import ProjectCard from 'components/projects/ProjectCard'
import { Project } from 'generated/graphql'

const ProjectsList = ({ projects }: { projects: Project[] }) => {
    return (
        <Flex flexWrap="wrap" px={3} mx={-2}>
            {projects.map((project, index) => (
                <ProjectCard project={project} key={index} />
            ))}
        </Flex>
    )
}

export default ProjectsList
