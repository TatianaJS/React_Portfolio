import { Project } from '../components/Project/Project'
import { projects } from '../helpers/projectsList'

export const Projects = (props) => {
    return <>
        <main className='section'>
            <div className='container'>
                <h2 className='title-1'>Проекты</h2>
                <ul className='projects'>
                    {projects.map(proj => {
                        return <Project
                            key={proj.id}
                            title={proj.title}
                            img={proj.img}
                            link={proj.gitHubLink}
                            id={proj.id} />
                    })}
                </ul>
            </div>
        </main>
    </>
}