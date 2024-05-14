import { NavLink } from 'react-router-dom'
import { BtnDarkMode } from '../BtnDarkMode/BtnDarkMode'
import '../../styles/Nav.css'

export const Nav = () => {
    const activeLink = 'nav-list__link nav-list__link--active'
    const link = 'nav-list__link'

    return <>
        <nav className='nav'>
            <div className='container'>
                <div className='nav-row'>
                    <NavLink
                        to='/'
                        className='logo'>
                        <strong>Tati's</strong> portfolio
                    </NavLink>
                    <BtnDarkMode />
                    <ul className='nav-list'>
                        <li className='nav-list__item'>
                            <NavLink
                                to='/'
                                className={({isActive}) => isActive ? activeLink : link }>
                                Главная
                            </NavLink>
                        </li>
                        <li className='nav-list__item'>
                            <NavLink
                                to='/projects'
                                className={({isActive}) => isActive ? activeLink : link }>
                                Проекты
                            </NavLink>
                        </li>
                        <li className='nav-list__item'>
                            <NavLink
                                to='/contacts'
                                className={({isActive}) => isActive ? activeLink : link }>
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}