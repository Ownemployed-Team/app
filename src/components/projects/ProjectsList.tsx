import { Project } from 'lib/generated/graphql'
import ProjectCard from 'components/projects/ProjectCard'
import { Flex } from 'rebass'
import { Gallery } from 'components/layout/Gallery'

const ProjectsList = ({ projects }: { projects: Project[] }) => {
    const list = projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
    ))
    return <Gallery items={list} />
}

export default ProjectsList
