import { NavLink } from 'react-router-dom'
import '../../styles/Project.css'

export const Project = ({title, img, link, id}) => {
    return <>
        <li className='project'>
            <NavLink to={`/project/${id}`}>
                <img
                    src={img}
                    alt={title}
                    className='project__img' />
                <h3 className='project__title'>
                    {title}
                </h3>
            </NavLink>
        </li>
    </>
}