import { Project } from 'generated/graphql'
import Grid from 'components/common/Grid'
import ProjectCard from 'components/projects/ProjectCard'

const ProjectsList = ({ projects }: { projects: Project[] }) => {
    return (
        <Grid>
            {projects.map((project, index) => (
                <ProjectCard project={project} key={index} />
            ))}
        </Grid>
    )
}

export default ProjectsList
